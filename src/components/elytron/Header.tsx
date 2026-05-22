import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import elytronLogo from "../../../logo-elytron.png";

const nav = [
  { label: "JARVIS", href: "#produto" },
  { label: "Curso", href: "#curso" },
  { label: "Demo", href: "#demo" },
  { label: "Depoimentos", href: "#provas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={elytronLogo}
            alt="Elytron"
            className={`h-16 w-16 rounded ${
              scrolled ? "drop-shadow-sm" : "drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
            }`}
            loading="eager"
            width={64}
            height={64}
          />
          <span className="font-display text-lg font-semibold tracking-tight">elytron</span>
          <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground ml-1">
            /ai.os
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-4 py-2 text-sm text-ink-soft hover:text-ink transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#produto"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-all hover:scale-[1.02]"
          >
            Comprar JARVIS
            <span className="text-xs opacity-60">→</span>
          </a>
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t hairline bg-background">
          <div className="px-6 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-ink"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#produto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-ink text-background px-5 py-3 text-sm font-medium"
            >
              Comprar JARVIS
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
