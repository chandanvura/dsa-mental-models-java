import type { Metadata } from "next";
import { ArrowRight, Building2, MessageSquareText } from "lucide-react";
import { sitePath } from "@/lib/site-path";

export const metadata: Metadata = {
  title: "FAANG Interview Questions",
  description: "Frequently recurring DSA patterns and representative coding questions from major technology interviews.",
};

const groups = [
  {company:"Google",focus:"Reasoning, graphs, DP, clean trade-offs",questions:["Longest Substring Without Repeating Characters","Number of Islands","Course Schedule","Word Ladder","Serialize and Deserialize Binary Tree","Longest Increasing Subsequence","Median of Two Sorted Arrays","LRU Cache"]},
  {company:"Amazon",focus:"Arrays, trees, heaps, practical edge cases",questions:["Two Sum","Top K Frequent Elements","Merge Intervals","Kth Largest Element","Rotting Oranges","Lowest Common Ancestor","Product of Array Except Self","Design a Data Structure"]},
  {company:"Meta",focus:"Fast coding, strings, trees, traversal",questions:["Valid Palindrome","3Sum","Binary Tree Vertical Order","Minimum Window Substring","Clone Graph","Subarray Sum Equals K","Merge K Sorted Lists","Random Pick with Weight"]},
  {company:"Microsoft",focus:"Fundamentals, linked lists, trees, design clarity",questions:["Reverse Linked List","Linked List Cycle","Validate Binary Search Tree","Spiral Matrix","Search in Rotated Sorted Array","Coin Change","Merge Two Sorted Lists","Implement Trie"]},
  {company:"Apple / Netflix",focus:"Strong fundamentals plus role-specific depth",questions:["LRU Cache","Group Anagrams","Meeting Rooms II","House Robber","Graph Valid Tree","Koko Eating Bananas","Daily Temperatures","Design Hit Counter"]},
];

const answer = ["Clarify input, constraints, duplicates, and expected output.","State brute force first and name its exact bottleneck.","Name the pattern and the information you will maintain.","Walk a small example with pointer/index movement.","Write Java in small, testable blocks.","Test empty, one-item, duplicate, and boundary cases.","Finish with time and space—including recursion stack."];

export default function InterviewPage(){
  return <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
    <section className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[.14em] text-primary">Interview room</p><h1 className="mt-3 text-4xl font-semibold tracking-[-.04em] sm:text-6xl">The questions worth recognizing—not memorizing.</h1><p className="mt-5 text-lg leading-8 text-muted-foreground">These are representative, repeatedly reported problem types associated with major tech interviews. Exact questions change; the pattern underneath them is what transfers.</p></section>
    <section className="mt-12 grid gap-5 lg:grid-cols-2">{groups.map((g,i)=><article key={g.company} className={`rounded-2xl border border-border bg-card/70 p-6 ${i===0?"lg:col-span-2":""}`}>
      <div className="mb-6 flex items-start justify-between"><div><h2 className="flex items-center gap-2 text-2xl font-semibold"><Building2 className="text-primary" size={21}/>{g.company}</h2><p className="mt-2 text-sm text-muted-foreground">{g.focus}</p></div><span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-primary">{g.questions.length} questions</span></div>
      <div className={`grid gap-2 ${i===0?"sm:grid-cols-2":""}`}>{g.questions.map((q,n)=><div key={q} className="flex items-center gap-3 rounded-lg border border-border/70 bg-[#091513] px-3 py-3"><span className="font-mono text-xs text-muted-foreground">{String(n+1).padStart(2,"0")}</span><span className="text-sm">{q}</span></div>)}</div>
    </article>)}</section>
    <section className="mt-14 grid gap-8 rounded-3xl border border-primary/25 bg-primary/7 p-6 lg:grid-cols-[.7fr_1.3fr] lg:p-9">
      <div><MessageSquareText className="text-primary" size={28}/><h2 className="mt-4 text-3xl font-semibold tracking-tight">Your answer flow when the code is not immediate</h2><p className="mt-3 leading-7 text-muted-foreground">A structured explanation still proves that you can solve the problem. Speak while you reason.</p></div>
      <ol className="space-y-3">{answer.map((x,i)=><li key={x} className="flex gap-4 rounded-xl border border-border bg-card/80 p-4"><span className="font-mono text-sm text-primary">{i+1}</span><span className="leading-6 text-[#d7e0dc]">{x}</span></li>)}</ol>
    </section>
    <section className="mt-12 text-center"><h2 className="text-2xl font-semibold">Return to pattern recognition</h2><p className="mt-2 text-muted-foreground">Search by the words you notice in a question.</p><a href={sitePath("/#patterns")} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground">Open pattern map <ArrowRight size={18}/></a></section>
  </main>
}
