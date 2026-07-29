import { NextResponse } from "next/server";
import { env } from "@/lib/env";

export async function GET() {
  const startTime = Date.now();
  let externalStatus = "OK";
  let sampleData = null;
  let fetchLatencyMs = 0;

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      cache: "no-store",
    });
    fetchLatencyMs = Date.now() - startTime;

    if (res.ok) {
      sampleData = await res.json();
    } else {
      externalStatus = `HTTP Error ${res.status}`;
    }
  } catch (error) {
    externalStatus = `Fetch Failed: ${(error as Error).message}`;
  }

  return NextResponse.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: {
      nodeEnv: env.NODE_ENV,
      appName: env.NEXT_PUBLIC_APP_NAME,
      apiUrl: env.NEXT_PUBLIC_API_URL,
    },
    externalNetworkCheck: {
      status: externalStatus,
      latencyMs: fetchLatencyMs,
      endpoint: "https://jsonplaceholder.typicode.com/todos/1",
      payload: sampleData,
    },
  });
}
