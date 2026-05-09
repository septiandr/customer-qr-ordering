const BASE_URL = "https://your-api.com";

type FetchOptions = RequestInit & {
  params?: Record<string, string | number>;
};

function buildUrl(endpoint: string, params?: Record<string, string | number>) {
  const url = new URL(`${BASE_URL}${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  return url.toString();
}

export async function apiFetch<T>(
  endpoint: string,
  options?: FetchOptions,
): Promise<T> {
  const response = await fetch(buildUrl(endpoint, options?.params), {
    ...options,

    headers: {
      "Content-Type": "application/json",

      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}
