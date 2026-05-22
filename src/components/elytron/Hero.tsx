import { motion } from "framer-motion";
import { ParticleSphere } from "./ParticleSphere";

export function Hero() {
  return (
    <section className="relative pt-28 lg:pt-36 pb-20 overflow-hidden">
      {/* Top hairline meta */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground border-b hairline pb-3 mb-12">
          <span>ELY—001 / Edição Founders</span>
          <span className="hidden sm:inline">JARVIS · 2026</span>
          <span>v3.2 ↗</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border hairline px-3 py-1.5 text-xs font-mono"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-ink animate-pulse" />
              <span className="uppercase tracking-[0.18em]">Pré-venda aberta</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="display-mega mt-8 text-[14vw] sm:text-[10vw] lg:text-[7.5vw] xl:text-[112px]"
            >
              Seu próprio
              <br />
              <span className="italic font-light">JARVIS.</span>{" "}
              <span className="relative inline-block">
                Real.
                <span className="absolute -right-3 top-1 h-3 w-3 rounded-full bg-ink animate-pulse" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 max-w-xl text-lg text-ink-soft text-balance"
            >
              Um assistente de IA que aprende com você e transforma sua casa em um
              organismo inteligente. Sem nuvem terceirizada. Sem fricção. Só conversa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#produto"
                className="group inline-flex items-center gap-3 rounded-full bg-ink text-background pl-6 pr-2 py-2 text-base font-medium transition-all hover:scale-[1.02]"
              >
                Comprar JARVIS — R$189,99
                <span className="h-9 w-9 rounded-full bg-background/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3 text-base font-medium hover:bg-secondary transition-colors"
              >
                <span className="h-2 w-2 rounded-full bg-ink" />
                Ver demonstração
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-14 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                ["2.000+", "Lares ativos"],
                ["4.9/5", "Avaliação média"],
                ["<200ms", "Latência local"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-semibold">{n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Orb visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none mx-auto aspect-square rounded-3xl overflow-hidden bg-black border border-white/10 flex items-center justify-center">
              <ParticleSphere />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating chips */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-6 rounded-full bg-background/90 backdrop-blur px-3 py-1.5 text-xs font-mono"
              >
                ◉ ouvindo · "olá jarvis"
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 right-6 rounded-full bg-background/90 backdrop-blur px-3 py-1.5 text-xs font-mono"
              >
                luz sala → 40%
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-3 rounded-full bg-background text-ink px-3 py-1.5 text-xs font-mono shadow-elevated"
              >
                clima → 22°C
              </motion.div>
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
              <span>fig. 01 — núcleo neural</span>
              <span>↗ live</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 border-y hairline py-5 overflow-hidden">
        <div className="marquee-track gap-16 text-ink whitespace-nowrap font-display text-2xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 pr-16">
              {[
                "Voz natural",
                "100% local",
                "Aprende contigo",
                "Integra tudo",
                "Sem mensalidade",
                "Open hardware",
              ].map((w) => (
                <span key={w} className="flex items-center gap-16">
                  <span className="opacity-90">{w}</span>
                  <span className="text-ink-soft">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
