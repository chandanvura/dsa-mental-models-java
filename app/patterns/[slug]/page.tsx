import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock3, ExternalLink, Lightbulb, MessageSquareText, TriangleAlert } from "lucide-react";
import { bySlug, patterns } from "@/lib/patterns";
import { CopyCode } from "@/components/copy-code";
import { sitePath } from "@/lib/site-path";

export function generateStaticParams(){ return patterns.map(p=>({slug:p.slug})); }
export const dynamicParams = false;
export function generateMetadata({params}:{params:Promise<{slug:string}>}) {
  return params.then(({slug})=>{const item=bySlug(slug); return {title:item?.name ?? "Pattern",description:item?.oneLiner};});
}

export default async function PatternPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const item=bySlug(slug); if(!item) notFound();
  const index=patterns.findIndex(p=>p.slug===slug); const previous=patterns[index-1]; const next=patterns[index+1];
  return <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
    <a href={sitePath("/#patterns")} className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft size={16}/> All patterns</a>
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_290px]">
      <article className="min-w-0">
        <header className="border-b border-border pb-8">
          <div className="flex items-start gap-4">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-primary/30 bg-primary/10 font-mono text-2xl text-primary">{item.icon}</span>
            <div><p className="text-sm font-medium text-primary">{item.category} · {item.level}</p><h1 className="mt-1 text-4xl font-semibold tracking-[-.035em] sm:text-5xl">{item.name}</h1></div>
          </div>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#c6d1cc]">{item.oneLiner}</p>
        </header>

        <section id="mental-model" className="py-9"><Label icon={<Lightbulb size={17}/>} text="Layman mental model"/><div className="mt-4 rounded-2xl border border-primary/25 bg-primary/8 p-6 text-lg leading-8 text-[#e3efdf]">{item.analogy}</div></section>
        <section id="recognition" className="border-t border-border py-9"><Label icon={<MessageSquareText size={17}/>} text="When your brain should select this"/><div className="mt-4 flex flex-wrap gap-2">{item.triggers.map(x=><span key={x} className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-[#c8d3ce]">{x}</span>)}</div></section>
        <section id="movement" className="border-t border-border py-9"><Label icon={<ArrowRight size={17}/>} text="How the algorithm moves"/><div className="mt-6 space-y-3">{item.steps.map((step,i)=><div key={step} className="flex gap-4 rounded-xl border border-border bg-card/60 p-4"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary font-mono text-xs font-bold text-primary-foreground">{i+1}</span><p className="leading-7 text-[#d4ded9]">{step}</p></div>)}</div></section>
        <section id="complexity" className="border-t border-border py-9"><Label icon={<Clock3 size={17}/>} text="Cost of the approach"/><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">{item.complexity.best&&<Metric label="Best" value={item.complexity.best}/>} {item.complexity.average&&<Metric label="Average" value={item.complexity.average}/>}<Metric label="Worst" value={item.complexity.worst}/><Metric label="Space" value={item.complexity.space}/></div></section>
        <section id="java" className="border-t border-border py-9"><div className="flex items-center justify-between gap-3"><Label icon={<span className="font-mono text-sm">{"{}"}</span>} text="Java reference"/><CopyCode code={item.java}/></div><pre className="mt-5 overflow-x-auto rounded-2xl border border-border bg-[#050b0a] p-5 font-mono text-sm leading-7 text-[#d6e2dc]"><code>{item.java}</code></pre></section>
        <section id="explanation" className="border-t border-border py-9"><Label icon={<MessageSquareText size={17}/>} text="Say this in the interview"/><blockquote className="mt-5 border-l-2 border-primary pl-5 text-lg leading-8 text-[#e1e9e5]">“{item.explain}”</blockquote></section>
        <section id="mistakes" className="border-t border-border py-9"><Label icon={<TriangleAlert size={17}/>} text="Mistakes to avoid"/><ul className="mt-5 space-y-3">{item.pitfalls.map(x=><li key={x} className="flex gap-3 text-muted-foreground"><TriangleAlert className="mt-1 shrink-0 text-[#ffb86b]" size={16}/><span className="leading-6">{x}</span></li>)}</ul></section>
        <section id="practice" className="border-t border-border py-9"><Label icon={<Check size={17}/>} text="Practice the same mental model"/><div className="mt-5 grid gap-3 sm:grid-cols-2">{item.problems.map((x,i)=><a key={x} href={`https://leetcode.com/problemset/?search=${encodeURIComponent(x)}`} target="_blank" rel="noreferrer" className="group rounded-xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-primary/60"><div className="flex items-center justify-between"><p className="text-xs text-muted-foreground">Problem {String(i+1).padStart(2,"0")}</p><ExternalLink size={14} className="text-muted-foreground group-hover:text-primary"/></div><p className="mt-1 font-medium">{x}</p></a>)}</div></section>
      </article>
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-2xl border border-border bg-card/75 p-5">
          <p className="text-xs font-semibold uppercase tracking-[.13em] text-primary">Mental checklist</p>
          {[["Mental model","#mental-model"],["Recognition clues","#recognition"],["How it moves","#movement"],["Complexity","#complexity"],["Java code","#java"],["Interview answer","#explanation"],["Practice","#practice"]].map(([x,href],i)=><a href={href} key={x} className="mt-3 flex items-center gap-3 rounded-lg px-2 py-2 text-sm transition hover:bg-secondary hover:text-primary"><span className="font-mono text-xs text-muted-foreground">{String(i+1).padStart(2,"0")}</span><span>{x}</span></a>)}
        </div>
        <a href={sitePath("/interview/")} className="mt-4 flex items-center justify-between rounded-2xl border border-primary/25 bg-primary/8 p-5 text-sm font-medium text-primary">Most-asked questions <ArrowRight size={17}/></a>
      </aside>
    </div>
    <nav className="mt-8 grid gap-3 border-t border-border pt-8 sm:grid-cols-2">{previous?<a href={sitePath(`/patterns/${previous.slug}/`)} className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground hover:border-primary/50">← {previous.name}</a>:<span/>}{next?<a href={sitePath(`/patterns/${next.slug}/`)} className="rounded-xl border border-border bg-card p-4 text-right text-sm text-muted-foreground hover:border-primary/50">{next.name} →</a>:null}</nav>
  </main>
}

function Label({icon,text}:{icon:React.ReactNode,text:string}){return <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[.13em] text-primary">{icon}{text}</h2>}
function Metric({label,value}:{label:string,value:string}){return <div className="rounded-xl border border-border bg-card p-4"><p className="text-xs text-muted-foreground">{label}</p><p className="mt-1 font-mono text-sm font-semibold text-primary">{value}</p></div>}
