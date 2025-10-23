import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { endpoint, body } = await req.json();

    if (!endpoint) return NextResponse.json({ status: false, message: "Endpoint missing" }, { status: 400 });

    const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;
    const url = `${API_BASE.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`;

    console.log("[Proxy] URL:", url, "Body:", body);

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    let data;
    try { data = await response.json(); } 
    catch { data = { status: false, message: "Invalid JSON response from API" }; }

    console.log("[Proxy] Response:", data);
    return NextResponse.json(data, { status: response.status });

  } catch (err) {
    console.error("[Proxy Error]:", err);
    return NextResponse.json({ status: false, message: "Server error" }, { status: 500 });
  }
}
