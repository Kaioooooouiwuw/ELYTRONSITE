import { motion } from "framer-motion";

const items = [
  {
    quote:
      "Em uma semana o JARVIS substituiu meu Alexa, meu termostato e três rotinas que eu mantinha na cabeça. Não volto atrás.",
    name: "Marina Lopes",
    role: "Arquiteta · São Paulo",
  },
  {
    quote:
      "Fiz o curso e construí o meu do zero. O conteúdo é cirúrgico, sem enrolação. Hoje vendo automações para clientes.",
    name: "Diego Albuquerque",
    role: "Eng. de software · Recife",
  },
  {
    quote:
      "Privacidade real foi o que me convenceu. Tudo roda em casa. Outras assistentes parecem amadoras perto disso.",
    name: "Júlia Tanaka",
    role: "Médica · Curitiba",
  },
  {
    quote:
      "Instalei em 20 minutos. A diferença sensorial de chegar em casa e ela já saber o que fazer é bizarra.",
    name: "Ricardo Mendes",
    role: "Founder · Belo Horizonte",
  },
];

export function Testimonials() {
  return (
    <section id="provas" className="py-24 lg:py-32 border-t hairline">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 mb-12 border-b hairline pb-6">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
              05 — Provas
            </div>
            <h2 className="display-mega text-5xl lg:text-7xl">
              Quem já vive
              <br />
              <span className="italic font-light">no futuro.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="text-ink font-display text-2xl">4.9</span>/5 · 312 avaliações
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl border hairline p-7 lg:p-8 hover:bg-secondary transition-colors"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <span key={k} className="h-1.5 w-6 rounded-full bg-ink" />
                ))}
              </div>
              <blockquote className="font-display text-xl lg:text-2xl leading-snug tracking-tight">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t hairline">
                <div className="h-10 w-10 rounded-full bg-ink text-background flex items-center justify-center font-display text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
