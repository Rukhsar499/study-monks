import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    let bodyData;
    try {
      bodyData = await req.json();
    } catch (err) {
      console.error("[Proxy] Failed to parse request JSON:", err);
      return NextResponse.json({ status: false, message: "Invalid request body" }, { status: 400 });
    }

    const { endpoint, body } = bodyData;

    if (!endpoint) {
      return NextResponse.json({ status: false, message: "Endpoint missing" }, { status: 400 });
    }

    const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
    if (!API_BASE) {
      console.error("[Proxy] NEXT_PUBLIC_API_BASE not set!");
      return NextResponse.json({ status: false, message: "Server misconfiguration" }, { status: 500 });
    }

    const url = `${API_BASE.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`;
    console.log("[Proxy] Request to:", url, "Body:", body);

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    let data;
    try {
      data = await res.json();
    } catch (jsonErr) {
      console.error("[Proxy] Failed to parse JSON response:", jsonErr);
      data = { status: false, message: "Invalid JSON response from API" };
    }

    console.log("[Proxy] Response:", data);
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("[Proxy] Unexpected Error:", err);
    return NextResponse.json({ status: false, message: "Server error" }, { status: 500 });
  }
}
