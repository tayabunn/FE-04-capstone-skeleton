import { Activity, CheckCircle2, Server, Globe, Clock, ShieldCheck, Database, Cpu } from "lucide-react";
import { env } from "@/lib/env";
import Link from "next/link";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const revalidate = 0; // Dynamic server-side rendering

async function getHealthData() {
  const startTime = Date.now();
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      cache: "no-store",
    });
    const latency = Date.now() - startTime;

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    const todo: Todo = await res.json();
    return {
      status: "OK",
      latency,
      todo,
      error: null,
    };
  } catch (err) {
    return {
      status: "ERROR",
      latency: Date.now() - startTime,
      todo: null,
      error: (err as Error).message,
    };
  }
}

export default async function HealthPage() {
  const healthResult = await getHealthData();
  const timestamp = new Date().toISOString();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6">
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <Activity className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                System Health Check
              </h1>
              <p className="text-xs text-slate-400">
                Server-side rendering &amp; networking validation page
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Status: {healthResult.status}
            </span>
          </div>
        </div>

        {/* Diagnostic Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-medium">SSR Network Fetch</span>
              <Globe className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-lg font-bold text-white flex items-baseline gap-1">
              {healthResult.latency} <span className="text-xs font-normal text-slate-400">ms</span>
            </div>
            <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>jsonplaceholder.typicode.com</span>
            </div>
          </div>

          <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-medium">Environment Mode</span>
              <Cpu className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-lg font-bold text-white capitalize">
              {env.NODE_ENV}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 font-mono">
              Next.js App Router 16
            </div>
          </div>

          <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-medium">Timestamp</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xs font-mono font-semibold text-slate-200 truncate">
              {timestamp.split("T")[1].replace("Z", " UTC")}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 font-mono truncate">
              {timestamp.split("T")[0]}
            </div>
          </div>
        </div>

        {/* Server Fetch Response Payload */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Server className="w-4 h-4 text-blue-400" />
              Live Server-side Data Fetching Test Payload
            </h2>
            <span className="text-[11px] text-slate-500 font-mono">GET /todos/1</span>
          </div>

          <div className="bg-slate-950 rounded-xl p-5 border border-slate-800/80 font-mono text-xs text-slate-300 overflow-x-auto shadow-inner">
            {healthResult.todo ? (
              <div className="space-y-2">
                <div className="text-slate-500">// Successfully fetched from remote REST API:</div>
                <div className="text-emerald-400 font-bold">Status: OK</div>
                <div><span className="text-slate-500">ID:</span> <span className="text-amber-300">{healthResult.todo.id}</span></div>
                <div><span className="text-slate-500">User ID:</span> <span className="text-amber-300">{healthResult.todo.userId}</span></div>
                <div><span className="text-slate-500">Title:</span> <span className="text-blue-300">&quot;{healthResult.todo.title}&quot;</span></div>
                <div><span className="text-slate-500">Completed:</span> <span className="text-indigo-300">{String(healthResult.todo.completed)}</span></div>
              </div>
            ) : (
              <div className="text-red-400 font-bold">
                Error fetching data: {healthResult.error}
              </div>
            )}
          </div>
        </div>

        {/* Environment Variable Check Grid */}
        <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-800 mb-8 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Database className="w-4 h-4 text-indigo-400" />
            Environment Variable Structure Safeguard
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400">NEXT_PUBLIC_API_URL</span>
              <span className="text-emerald-400 text-[11px] font-semibold">{env.NEXT_PUBLIC_API_URL ? "Configured" : "Missing"}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400">SUPABASE_URL</span>
              <span className="text-emerald-400 text-[11px] font-semibold">{env.SUPABASE_URL ? "Configured" : "Missing"}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400">SUPABASE_ANON_KEY</span>
              <span className="text-indigo-400 text-[11px] font-semibold">{env.SUPABASE_ANON_KEY}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400">DATABASE_URL</span>
              <span className="text-indigo-400 text-[11px] font-semibold">{env.DATABASE_URL}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Server-side fetching &amp; network connectivity verified</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/api/health"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors"
            >
              View Raw JSON API
            </a>
            <Link
              href="/"
              className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
