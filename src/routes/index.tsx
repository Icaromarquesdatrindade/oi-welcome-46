import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Users, Gem, Compass, BookOpen, Rocket, TrendingUp, Sparkles } from "lucide-react";
import { Header, Logo } from "@/components/vendave/Header";
import { StrategyLibrary } from "@/components/vendave/StrategyLibrary";
import { Reveal } from "@/components/vendave/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vendave — Venda melhor começa com estratégia" },
      { name: "description", content: "Estratégias práticas de vendas e marketing digital: prospecção, copywriting, conversão, funil, oferta e mentalidade." },
      { property: "og:title", content: "Vendave — Venda melhor começa com estratégia" },
      { property: "og:description", content: "Estratégias práticas de vendas e marketing digital para vender com clareza e constância." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  { icon: Users, title: "Entender o cliente", text: "Descubra dores, desejos e o momento de compra de quem você atende." },
  { icon: Gem, title: "Comunicar valor", text: "Mostre a transformação com clareza antes de falar de preço." },
  { icon: Compass, title: "Conduzir a decisão", text: "Guie a conversa com segurança até o sim, sem pressão." },
];
const method = [
  { icon: BookOpen, title: "Aprender", text: "Estude estratégias objetivas, organizadas por etapa da venda." },
  { icon: Rocket, title: "Aplicar", text: "Coloque em prática com roteiros e passos simples no seu dia a dia." },
  { icon: TrendingUp, title: "Evoluir", text: "Meça resultados, ajuste e transforme vendas em processo." },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <main>
        <section id="inicio" className="relative px-5 pb-20 pt-32 md:pb-28 md:pt-44">
          <div className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/15 blur-[120px]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground"><Sparkles className="h-3.5 w-3.5 text-gold" /> Vendas e marketing digital</span>
            <h1 className="animate-fade-up mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-7xl" style={{ animationDelay: "100ms" }}>
              Venda melhor começa com <span className="text-gold-gradient italic">estratégia.</span>
            </h1>
            <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg" style={{ animationDelay: "200ms" }}>
              A Vendave reúne estratégias práticas para você atrair, conversar e fechar mais vendas — no WhatsApp, no direct e em qualquer canal digital.
            </p>
            <div className="animate-fade-up mt-9 flex flex-col justify-center gap-3 sm:flex-row" style={{ animationDelay: "300ms" }}>
              <a href="#estrategias" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-4 font-semibold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5">Começar agora <ArrowRight className="h-4 w-4" /></a>
              <a href="#metodo" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 font-semibold transition-colors hover:border-gold hover:text-gold">Conhecer o método</a>
            </div>
          </div>
        </section>

        <section id="pilares" className="scroll-mt-20 px-5 py-16">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7">
                  <span className="absolute right-5 top-4 font-display text-6xl font-bold text-gold/10">0{i + 1}</span>
                  <p.icon className="h-8 w-8 text-gold" />
                  <h3 className="mt-5 font-display text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <StrategyLibrary />

        <section id="metodo" className="scroll-mt-20 border-y border-border bg-card/40 px-5 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">O método Vendave</p>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">Aprender, aplicar e evoluir.</h2>
            </Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {method.map((m, i) => (
                <Reveal key={m.title} delay={i * 120}>
                  <div className="flex gap-5 md:flex-col">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/50 text-gold"><m.icon className="h-6 w-6" /></span>
                    <div>
                      <p className="text-xs font-semibold text-gold">Etapa {i + 1}</p>
                      <h3 className="mt-1 font-display text-2xl font-semibold">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="comecar" className="scroll-mt-20 px-5 py-20 md:py-28">
          <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gold/40 bg-card p-10 text-center md:p-16">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/20 blur-[90px]" />
            <h2 className="relative font-display text-3xl font-semibold md:text-5xl">Sua próxima venda começa <span className="text-gold-gradient">agora.</span></h2>
            <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">Escolha uma estratégia, aplique hoje e veja a diferença nas suas conversas.</p>
            <a href="#estrategias" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 font-semibold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5">Explorar estratégias <ArrowRight className="h-4 w-4" /></a>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <Logo />
          <p className="text-sm text-muted-foreground">Estratégia, clareza e constância para vender melhor.</p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Vendave. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
