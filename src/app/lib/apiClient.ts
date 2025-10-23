export const API_BASE = process.env.NEXT_PUBLIC_API_BASE as string;

export interface ApiResponse<T> {
  status: boolean;
  message: string;
  data?: T;
}

export async function apiPost<TResponse, TBody extends Record<string, unknown>>(
  endpoint: string,
  body: TBody
): Promise<ApiResponse<TResponse>> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API Error (${res.status}): ${errorText}`);
  }

  const data = (await res.json()) as ApiResponse<TResponse>;
  return data;
}
