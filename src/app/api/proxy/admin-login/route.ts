import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Call the real API (your Laravel backend)
    const response = await fetch("https://learning.studymonks.com/api/v1/admin/admin-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json({ success: false, message: "Proxy error" }, { status: 500 });
  }
}
