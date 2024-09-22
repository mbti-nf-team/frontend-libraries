import qs from 'qs';

import {
  fetchApi, FetchApiRequest, FetchError, paramsSerializer,
} from '.';

describe('paramsSerializer', () => {
  it('"qs.stringify"를 호출해야만 한다', () => {
    const qsSpyOn = jest.spyOn(qs, 'stringify');
    const params = {
      param1: 'apple',
      param2: 'banana',
      param3: 'orange',
    };

    const result = paramsSerializer(params);

    expect(result).toBe('param1=apple&param2=banana&param3=orange');
    expect(qsSpyOn).toHaveBeenCalledWith(params, {
      indices: false,
      arrayFormat: 'comma',
    });

    qsSpyOn.mockRestore();
  });
});

describe('fetchApi', () => {
  const mockResponse = {
    data: 'mockData',
  };

  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  const mockRequestConfig = (
    url: string,
    params?: Record<string, string>,
  ): FetchApiRequest<Record<string, string>> => ({
    url,
    method: 'GET',
    params,
  });

  context('fetch가 성공한 경우', () => {
    const defaultUrl = '/test/test';

    context('params가 없는 경우', () => {
      (window.fetch as jest.Mock) = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(mockResponse),
        ok: true,
      }));

      it('fetch가 호출되야만 한다', async () => {
        const response = await fetchApi<string>({
          url: defaultUrl,
        });

        expect(response).toBe(mockResponse);
        expect(fetch).toBeCalledWith(defaultUrl, {
          body: undefined,
          headers: undefined,
          method: 'GET',
          signal: expect.any(AbortSignal),
        });
      });
    });

    context('params가 있는 경우', () => {
      (window.fetch as jest.Mock) = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(mockResponse),
        ok: true,
      }));

      it('fetch가 호출되야만 한다', async () => {
        const response = await fetchApi<string>(mockRequestConfig(defaultUrl, { test: 'test' }));

        expect(response).toBe(mockResponse);
        expect(fetch).toBeCalledWith(`${defaultUrl}?test=test`, {
          body: undefined,
          headers: undefined,
          method: 'GET',
          signal: expect.any(AbortSignal),
        });
      });
    });

    context('body가 있는 경우', () => {
      const body = {
        test: 'test',
      };

      (window.fetch as jest.Mock) = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(mockResponse),
        ok: true,
      }));

      it('fetch가 호출되야만 한다', async () => {
        const response = await fetchApi<string>({
          url: defaultUrl,
          method: 'POST',
          body,
        });

        expect(response).toBe(mockResponse);
        expect(fetch).toBeCalledWith(defaultUrl, {
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          signal: expect.any(AbortSignal),
        });
      });
    });
  });

  context('fetch가 실패한 경우', () => {
    context('response.ok가 false인 경우', () => {
      const statusText = 'error';

      context('response.json이 성공한 경우', () => {
        it('에러가 던저져야 한다', async () => {
          (window.fetch as jest.Mock) = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({
              message: statusText,
            }),
            status: 400,
            ok: false,
          }));

          const throwErrorApiResponse = () => fetchApi<string>(mockRequestConfig('/test/test'));

          await expect(throwErrorApiResponse).rejects.toThrow(new FetchError(400, statusText));
        });
      });

      context('response.json이 실패한 경우', () => {
        it('에러가 던저져야 한다', async () => {
          (window.fetch as jest.Mock) = jest.fn(() => Promise.resolve({
            json: () => Promise.reject(),
            ok: false,
          }));

          const throwErrorApiResponse = () => fetchApi<string>(mockRequestConfig('/test/test'));

          await expect(throwErrorApiResponse).rejects.toThrow(new FetchError(500, ''));
        });
      });
    });

    context('fetch가 실패한 경우', () => {
      context('fetchError가 아닌 경우', () => {
        context('error가 AbortError가 아닌 나머지 에러인 경우', () => {
          it('에러가 던저져야 한다', async () => {
            (window.fetch as jest.Mock) = jest.fn(() => Promise.reject());

            const throwErrorApiResponse = () => fetchApi<string>(mockRequestConfig('/test/test'));

            await expect(throwErrorApiResponse).rejects.toThrow(new FetchError(500, 'Internal Server Error'));
          });
        });

        context('error가 AbortError인 경우', () => {
          class AbortError extends Error {
            constructor(message: string) {
              super(message);
              this.name = 'AbortError';
            }
          }

          it('에러가 던저져야 한다', async () => {
            (window.fetch as jest.Mock) = jest.fn(() => Promise.reject(new AbortError('AbortError')));

            const throwErrorApiResponse = () => fetchApi<string>(mockRequestConfig('/test/test'));

            await expect(throwErrorApiResponse).rejects.toThrow(new FetchError(408, 'Request Timeout'));
          });
        });
      });

      context('fetchError인 경우', () => {
        const fetchError = new FetchError(400, 'error');

        it('에러가 던저져야 한다', async () => {
          (window.fetch as jest.Mock) = jest.fn(() => Promise.reject(fetchError));

          const throwErrorApiResponse = () => fetchApi<string>(mockRequestConfig('/test/test'));

          await expect(throwErrorApiResponse).rejects.toThrow(fetchError);
        });
      });
    });
  });
});
