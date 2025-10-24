import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { body } = await req.json();
    const apiUrl = `https://learning.studymonks.com/api/v1/register`; 

    console.log("[Proxy] Forwarding to:", apiUrl);
    console.log("[Proxy] Body:", body);

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { status: false, message: "Proxy failed" },
      { status: 500 }
    );
  }
}
