"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyCode({code}:{code:string}) {
  const [copied,setCopied]=useState(false);
  const copy = async () => {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(code);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = code;
      textarea.setAttribute("readonly","");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    window.setTimeout(()=>setCopied(false),1800);
  };
  return <button type="button" onClick={copy} className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-3 py-2 text-xs font-medium text-muted-foreground transition hover:border-primary/50 hover:text-foreground" aria-label="Copy Java code">
    {copied?<Check size={14} className="text-primary"/>:<Copy size={14}/>} {copied?"Copied":"Copy code"}
  </button>;
}
