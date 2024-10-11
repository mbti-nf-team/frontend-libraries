import QueryString from 'qs';

const TIME_OUT = 30000;

export class FetchError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'FetchError';
  }
}

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface FetchApiRequest<K = unknown, B = unknown> {
  url: string;
  params?: K;
  method?: Method;
  body?: B;
  timeout?: number;
  config?: Omit<RequestInit, 'method' | 'body'>;
}

export const paramsSerializer = <T>(params: T): string => QueryString.stringify(params, {
  arrayFormat: 'comma',
  indices: false,
});

const defaultHeaders = {
  'Content-Type': 'application/json',
};

async function fetchApi<T, K = unknown, B = unknown>({
  url,
  params,
  body,
  config = {},
  timeout = TIME_OUT,
  method = 'GET',
}: FetchApiRequest<K, B>): Promise<T> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(`${url}${params ? `?${paramsSerializer(params)}` : ''}`, {
      ...config,
      body: body ? JSON.stringify(body) : undefined,
      method,
      signal: controller.signal,
      headers: {
        ...defaultHeaders,
        ...config.headers,
      },
    });

    clearTimeout(id);

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));

      throw new FetchError(response.status, errorBody?.message || response.statusText);
    }

    const data = await response.json() as T;

    return data;
  } catch (error) {
    if (error instanceof FetchError) {
      throw error;
    }

    if (error instanceof Error && error.name === 'AbortError') {
      throw new FetchError(408, 'Request Timeout');
    }

    throw new FetchError(500, 'Internal Server Error');
  }
}

export default fetchApi;
