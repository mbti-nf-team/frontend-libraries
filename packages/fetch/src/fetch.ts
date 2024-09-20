import QueryString from 'qs';

export type Method =
    | 'get' | 'GET'
    | 'delete' | 'DELETE'
    | 'head' | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post' | 'POST'
    | 'put' | 'PUT'
    | 'patch' | 'PATCH'
    | 'purge' | 'PURGE'
    | 'link' | 'LINK'
    | 'unlink' | 'UNLINK';

export interface FetchApiRequest<K = unknown> {
  url: string;
  params?: K;
  method?: Method;
  body?: unknown;
  config?: Omit<RequestInit, 'method' | 'body'>;
}

export const paramsSerializer = <T>(params: T): string => QueryString.stringify(params, {
  arrayFormat: 'comma',
  indices: false,
});

async function fetchApi<T, K = unknown>({
  url,
  params,
  body,
  config = {},
  method = 'GET',
}: FetchApiRequest<K>): Promise<T> {
  const response = await fetch(`${url}${params ? `?${paramsSerializer(params)}` : ''}`, {
    ...config,
    body: body ? JSON.stringify(body) : undefined,
    method,
    headers: body ? {
      'Content-Type': 'application/json',
      ...config.headers,
    } : config.headers,
  });

  const data = await response.json() as T;

  return data;
}

export default fetchApi;
