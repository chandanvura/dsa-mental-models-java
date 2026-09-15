import { ArrowRight, BrainCircuit, Code2, MessageSquareText, Route } from "lucide-react";
import { AlgorithmPlayer } from "@/components/algorithm-player";
import { PatternExplorer } from "@/components/pattern-explorer";
import { sitePath } from "@/lib/site-path";

const loop = [
  ["01","Understand","What is given? What exactly must I return?"],
  ["02","Brute force","Say the obvious solution and its cost."],
  ["03","Spot waste","What work am I repeating?"],
  ["04","Choose pattern","Pick the memory and movement that remove the waste."],
  ["05","Dry run","Move pointers on a tiny example before coding."],
  ["06","Complexity","State time, space, and the worst input."],
];

export default function Home() {
  return (
    <main>
      <section className="grid-noise border-b border-border/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-sm text-primary"><BrainCircuit size={15}/> Java-first DSA mental models</div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-.045em] sm:text-6xl">See the pattern.<br/><span className="text-primary">Explain the logic.</span><br/>Then write Java.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Skip the tutorial maze. Learn what moves, what gets remembered, why the optimization works, and exactly how to explain it in an interview.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#patterns" className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:brightness-110">Find a pattern <ArrowRight size={18}/></a>
              <a href={sitePath("/interview/")} className="flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 font-medium text-foreground transition hover:border-primary/50"><MessageSquareText size={18}/> Interview question bank</a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[["27","mental models"],["75+","problem cues"],["Java","solutions"]].map(([value,label])=><div key={label} className="border-l border-border pl-3"><p className="text-lg font-semibold text-primary">{value}</p><p className="text-sm text-muted-foreground">{label}</p></div>)}
            </div>
          </div>
          <AlgorithmPlayer/>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.14em] text-primary">One repeatable method</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Your thinking loop for every problem</h2>
            <p className="mt-4 leading-7 text-muted-foreground">Interviewers need to see your reasoning. Use the same six checkpoints even when the code is not coming immediately.</p>
            <div className="mt-7 rounded-2xl border border-primary/25 bg-primary/8 p-5">
              <p className="font-mono text-sm leading-7 text-[#dcff87]">Pattern + Movement<br/>+ Condition + Memory</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {loop.map(([n,title,copy])=><div key={n} className="rounded-xl border border-border bg-card/65 p-4">
              <div className="mb-3 flex items-center justify-between"><span className="font-mono text-xs text-primary">{n}</span>{title==="Choose pattern"?<Route size={16} className="text-primary"/>:title==="Dry run"?<Code2 size={16} className="text-primary"/>:null}</div>
              <h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p>
            </div>)}
          </div>
        </div>
      </section>
      <PatternExplorer/>
    </main>
  );
}
