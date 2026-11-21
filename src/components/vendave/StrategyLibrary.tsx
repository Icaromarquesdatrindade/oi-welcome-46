import { useMemo, useState } from "react";
import { Search, X, Target, PenLine, MousePointerClick, Filter, Gift, Brain, ChevronDown, type LucideIcon } from "lucide-react";
import { searchStrategies, strategies } from "@/lib/strategies";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = { prospeccao: Target, copywriting: PenLine, conversao: MousePointerClick, funil: Filter, oferta: Gift, mentalidade: Brain };

export function StrategyLibrary() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const results = useMemo(() => searchStrategies(query), [query]);
  return (
    <section id="estrategias" className="scroll-mt-20 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Biblioteca</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">Estratégias para cada etapa da venda</h2>
          <p className="mt-4 text-muted-foreground">Pesquise por tema, palavra-chave ou objetivo e abra o passo a passo.</p>
        </Reveal>
        <div className="relative mx-auto mt-10 max-w-xl">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gold" />
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar: oferta, whatsapp, objeções..." aria-label="Pesquisar estratégias"
            className="h-14 w-full rounded-full border border-input bg-card pl-12 pr-12 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-ring/30" />
          {query && <button onClick={() => setQuery("")} aria-label="Limpar busca" className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"><X className="h-5 w-5" /></button>}
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground" aria-live="polite">
          {query ? `${results.length} ${results.length === 1 ? "estratégia encontrada" : "estratégias encontradas"}` : `${strategies.length} estratégias disponíveis`}
        </p>
        {results.length === 0 ? (
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-border p-8 text-center">
            <p className="font-medium">Nenhuma estratégia encontrada para “{query}”.</p>
            <button onClick={() => setQuery("")} className="mt-4 text-sm font-semibold text-gold hover:underline">Ver todas</button>
          </div>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((s) => {
              const Icon = icons[s.id] ?? Target;
              const open = openId === s.id;
              return (
                <article key={s.id} className="animate-fade-up group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-gold transition-colors group-hover:bg-gold-gradient group-hover:text-gold-foreground"><Icon className="h-6 w-6" /></span>
                  <h3 className="mt-5 font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.slice(0, 3).map((t) => <button key={t} onClick={() => setQuery(t)} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition hover:border-gold hover:text-gold">#{t}</button>)}
                  </div>
                  <button onClick={() => setOpenId(open ? null : s.id)} aria-expanded={open} className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm font-semibold text-gold">
                    {open ? "Ocultar passo a passo" : "Ver passo a passo"}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
                  </button>
                  {open && (
                    <ol className="animate-fade-up mt-4 space-y-3">
                      {s.steps.map((step, i) => (
                        <li key={step} className="flex gap-3 text-sm"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-gradient text-xs font-bold text-gold-foreground">{i + 1}</span>{step}</li>
                      ))}
                    </ol>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
