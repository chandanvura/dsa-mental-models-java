"use client";

import { sitePath } from "@/lib/site-path";

export default function ErrorPage({reset}:{error:Error & {digest?:string};reset:()=>void}){
  return <main className="mx-auto grid min-h-[70vh] max-w-2xl place-items-center px-5 text-center">
    <div><p className="font-mono text-sm text-primary">Something paused</p><h1 className="mt-3 text-4xl font-semibold">This lesson could not load.</h1><p className="mt-4 text-muted-foreground">Retry the page, or return to the pattern map without losing your place.</p><div className="mt-7 flex justify-center gap-3"><button type="button" onClick={reset} className="rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground">Try again</button><a href={sitePath("/#patterns")} className="rounded-xl border border-border bg-card px-5 py-3 font-medium">Pattern map</a></div></div>
  </main>
}
