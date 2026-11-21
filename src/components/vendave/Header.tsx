import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#pilares", label: "Pilares" },
  { href: "#estrategias", label: "Estratégias" },
  { href: "#metodo", label: "Método" },
  { href: "#comecar", label: "Começar" },
];

export function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2" aria-label="Vendave — início">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold-gradient font-display text-lg font-bold text-gold-foreground">V</span>
      <span className="font-display text-xl font-semibold tracking-wide">Vend<span className="text-gold-gradient">ave</span></span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || open ? "border-b border-border bg-background/85 backdrop-blur-lg" : "bg-transparent")}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-gold">{l.label}</a>)}
        </nav>
        <a href="#estrategias" className="hidden rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5 md:inline-flex">Explorar estratégias</a>
        <button className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden" onClick={() => setOpen((o) => !o)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="animate-fade-up border-t border-border px-5 pb-6 pt-2 md:hidden">
          {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-border/50 py-4 text-base">{l.label}</a>)}
          <a href="#estrategias" onClick={() => setOpen(false)} className="mt-5 flex justify-center rounded-full bg-gold-gradient py-3 font-semibold text-gold-foreground">Explorar estratégias</a>
        </nav>
      )}
    </header>
  );
}
