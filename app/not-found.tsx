
import { sitePath } from "@/lib/site-path";

export default function NotFound(){
  return <main className="mx-auto grid min-h-[70vh] max-w-2xl place-items-center px-5 text-center">
    <div><p className="font-mono text-sm text-primary">404</p><h1 className="mt-3 text-4xl font-semibold">That pattern is not in the map.</h1><p className="mt-4 text-muted-foreground">Return to the pattern library and choose a supported topic.</p><a href={sitePath("/#patterns")} className="mt-7 inline-flex rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground">Open pattern map</a></div>
  </main>
}
