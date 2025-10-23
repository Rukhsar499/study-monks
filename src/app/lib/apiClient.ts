export const API_BASE = process.env.NEXT_PUBLIC_API_BASE as string;

export interface ApiResponse<T = unknown> {
  status: boolean;
  message?: string;
  data?: T;
}

export async function apiProxy<T = unknown>(
  endpoint: string,
  body: Record<string, unknown>
): Promise<ApiResponse<T>> {
  const res = await fetch("/api/proxy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ endpoint, body }),
  });

  if (!res.ok) throw new Error(`API request failed with status ${res.status}`);

  const data: ApiResponse<T> = await res.json();
  return data;
}