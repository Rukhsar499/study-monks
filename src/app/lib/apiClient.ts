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
  const res = await fetch("https://learning.studymonks.com/api/v1/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ endpoint, body }),
});

const text = await res.text();
console.log("Fetch response text:", text);

let data: ApiResponse<T>;
try {
  data = JSON.parse(text);
} catch (err) {
  data = { status: false, message: "Invalid JSON response from API" };
}
return data;
}
