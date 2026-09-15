"use client";

import { Pause, Play, RotateCcw, StepForward } from "lucide-react";
import { useEffect, useState } from "react";

type Frame = { a: number[]; active: number[]; fixed: number[]; note: string };

const frames: Frame[] = [
  { a:[5,3,8,4,2], active:[0,1], fixed:[], note:"Compare 5 and 3. They are in the wrong order." },
  { a:[3,5,8,4,2], active:[1,2], fixed:[], note:"Swap. Now compare 5 and 8—already correct." },
  { a:[3,5,8,4,2], active:[2,3], fixed:[], note:"8 is larger than 4, so swap them." },
  { a:[3,5,4,8,2], active:[3,4], fixed:[], note:"8 is larger than 2, so swap again." },
  { a:[3,5,4,2,8], active:[], fixed:[4], note:"Pass complete: 8 is fixed. The next pass can ignore it." },
];

export function AlgorithmPlayer() {
  const [step,setStep]=useState(0);
  const [playing,setPlaying]=useState(false);
  useEffect(()=>{ if(!playing)return; const timer=setInterval(()=>setStep(s=>{if(s===frames.length-1){setPlaying(false);return s;}return s+1;}),1100); return()=>clearInterval(timer);},[playing]);
  const togglePlay = () => {
    if (playing) { setPlaying(false); return; }
    setStep(current => current === frames.length - 1 ? 0 : current + 1);
    setPlaying(true);
  };
  const frame=frames[step];
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-[#091513]">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div><p className="text-sm font-semibold">Pointer movement</p><p className="text-xs text-muted-foreground">Bubble Sort · Pass 1</p></div>
        <span className="font-mono text-xs text-primary">{step+1} / {frames.length}</span>
      </div>
      <div className="grid min-h-64 place-items-center p-6">
        <div className="w-full max-w-lg">
          <div className="flex items-end justify-center gap-2 sm:gap-4">
            {frame.a.map((value,i)=><div key={i} className="flex flex-1 flex-col items-center gap-2">
              <div className={`flex w-full max-w-16 items-end justify-center rounded-t-lg border transition-all duration-500 ${frame.active.includes(i)?"border-primary bg-primary/25 text-primary":frame.fixed.includes(i)?"border-[#55d6be] bg-[#55d6be]/20 text-[#7cebd5]":"border-border bg-secondary text-foreground"}`} style={{height:48+value*10}}><span className="mb-2 font-mono font-bold">{value}</span></div>
              <span className="font-mono text-xs text-muted-foreground">{i}</span>
            </div>)}
          </div>
          <p aria-live="polite" className="mt-7 min-h-14 text-center leading-6 text-[#c4cfca]">{frame.note}</p>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-border bg-card/70 px-5 py-3">
        <button type="button" onClick={()=>{setStep(0);setPlaying(false)}} aria-label="Restart" className="rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"><RotateCcw size={18}/></button>
        <div className="flex gap-2">
          <button type="button" onClick={togglePlay} className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">{playing?<Pause size={16}/>:<Play size={16}/>} {playing?"Pause":"Play"}</button>
          <button type="button" onClick={()=>{setPlaying(false);setStep(s=>(s+1)%frames.length)}} className="rounded-lg border border-border p-2 text-muted-foreground hover:text-foreground" aria-label="Next step"><StepForward size={18}/></button>
        </div>
      </div>
    </div>
  );
}
