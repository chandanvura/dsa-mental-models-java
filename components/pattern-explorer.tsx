"use client";

import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, patterns } from "@/lib/patterns";
import { sitePath } from "@/lib/site-path";

export function PatternExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const shown = useMemo(() => patterns.filter(p => {
    const text = [p.name,p.oneLiner,...p.triggers].join(" ").toLowerCase();
    return (category === "All" || p.category === category) && text.includes(query.toLowerCase());
  }), [query, category]);

  return (
    <section id="patterns" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
      <div className="sticky top-16 z-30 -mx-2 mb-8 border-b border-border/60 bg-[#07100f]/92 px-2 py-4 backdrop-blur-xl">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative max-w-xl flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={18}/>
            <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search “substring”, “top K”, “sorted”…" className="h-12 w-full rounded-xl border border-border bg-card/80 pl-11 pr-4 text-base outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"/>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {["All",...categories].map(c => <button type="button" aria-pressed={category===c} key={c} onClick={()=>setCategory(c)} className={`whitespace-nowrap rounded-lg border px-3.5 py-2 text-sm transition ${category===c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"}`}>{c}</button>)}
          </div>
        </div>
      </div>

      <div className="mb-5 flex items-end justify-between">
        <div><p className="text-sm font-medium text-primary">{shown.length} mental models</p><h2 className="mt-1 text-2xl font-semibold tracking-tight">Choose what the problem sounds like</h2></div>
      </div>
      <p aria-live="polite" className="sr-only">{shown.length} patterns shown</p>
      {shown.length ? <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {shown.map((item,index) => (
          <a href={sitePath(`/patterns/${item.slug}/`)} key={item.slug} style={{animationDelay:`${Math.min(index,8)*45}ms`}} className="group animate-rise rounded-2xl border border-border bg-card/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-card">
            <div className="mb-5 flex items-start justify-between">
              <span className="grid size-11 place-items-center rounded-xl border border-border bg-secondary font-mono text-lg text-primary">{item.icon}</span>
              <ArrowUpRight className="text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" size={19}/>
            </div>
            <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[.12em] text-muted-foreground"><span>{item.category}</span><span>·</span><span>{item.level}</span></div>
            <h3 className="text-xl font-semibold tracking-tight">{item.name}</h3>
            <p className="mt-2 leading-7 text-muted-foreground">{item.oneLiner}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">{item.triggers.slice(0,3).map(t=><span key={t} className="rounded-md bg-secondary px-2 py-1 text-xs text-[#b8c5c0]">{t}</span>)}</div>
          </a>
        ))}
      </div> : <div className="rounded-2xl border border-dashed border-border p-12 text-center"><p className="text-lg font-medium">No pattern matches that phrase.</p><button type="button" className="mt-3 text-sm text-primary" onClick={()=>{setQuery("");setCategory("All")}}>Clear search</button></div>}
    </section>
  );
}
