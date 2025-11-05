import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://learning.studymonks.com/api/v1/faqs", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": "Next.js Server",
      },
      cache: "no-store",
    });

    const text = await res.text();

    try {
      const data = JSON.parse(text);
      return NextResponse.json(data, { status: res.status });
    } catch {
      console.error("Received non-JSON response:", text.slice(0, 200));
      return new NextResponse(text, { status: res.status });
    }
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { success: false, error: "Proxy failed to fetch FAQs" },
      { status: 500 }
    );
  }
}
