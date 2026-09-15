export default function LoadingPattern(){
  return <main className="mx-auto max-w-7xl animate-pulse px-5 py-14 lg:px-8" aria-label="Loading pattern">
    <div className="h-4 w-28 rounded bg-secondary"/>
    <div className="mt-10 h-12 w-2/3 rounded-xl bg-secondary"/>
    <div className="mt-5 h-6 w-4/5 rounded bg-secondary"/>
    <div className="mt-12 grid gap-4 lg:grid-cols-3">
      <div className="h-56 rounded-2xl bg-card lg:col-span-2"/>
      <div className="h-56 rounded-2xl bg-card"/>
    </div>
  </main>
}
