"use client";

import { usePathname } from "next/navigation";
import { Braces, Menu, X } from "lucide-react";
import { useState } from "react";
import { currentSitePath, sitePath } from "@/lib/site-path";

export function SiteNav() {
  const path = currentSitePath(usePathname());
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Pattern map" },
    { href: "/patterns/bubble-sort/", label: "Learn a pattern" },
    { href: "/interview/", label: "FAANG questions" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-[#07100f]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
        <a href={sitePath("/")} className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_24px_rgb(202_255_63/18%)]"><Braces size={19}/></span>
          <span>DSA<span className="text-primary">.map</span></span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a key={link.href} href={sitePath(link.href)} className={`rounded-lg px-4 py-2 text-sm transition ${path === link.href ? "bg-secondary text-primary" : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"}`}>
              {link.label}
            </a>
          ))}
        </div>
        <a href={sitePath("/interview/")} className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110 md:block">Practice interview</a>
        <button type="button" aria-expanded={open} className="rounded-lg p-2 text-muted-foreground md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </nav>
      {open && <div className="border-t border-border bg-[#091513] p-4 md:hidden">{links.map(link => <a onClick={()=>setOpen(false)} key={link.href} href={sitePath(link.href)} className="block rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">{link.label}</a>)}</div>}
    </header>
  );
}
