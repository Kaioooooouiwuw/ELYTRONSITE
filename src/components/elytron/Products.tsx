import { motion } from "framer-motion";
import { Check } from "lucide-react";
import jarvisDevice from "../../../JARVIS - COMPLETO.jpg";
import courseFlatlay from "../../../CURSO.jpg";

const jarvisFeatures = [
  "Hardware Elytron edição Founders",
  "Reconhecimento de voz offline",
  "Integração com 200+ dispositivos",
  "Atualizações vitalícias",
  "Suporte premium 12 meses",
];

const courseModules = [
  "Fundamentos de IA local",
  "Arquitetura do JARVIS",
  "Síntese e reconhecimento de voz",
  "Automação Z-Wave & Matter",
  "Skills personalizadas em Python",
  "Deploy em Raspberry Pi",
  "Projeto final + certificado",
];

export function Products() {
  return (
    <section id="produto" className="relative py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14 border-b hairline pb-6">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
              02 — Catálogo
            </div>
            <h2 className="display-mega text-4xl sm:text-5xl lg:text-7xl">
              Duas portas.
              <br />
              <span className="italic font-light">Um futuro.</span>
            </h2>
          </div>
          <p className="hidden md:block max-w-xs text-sm text-ink-soft text-right">
            Compre o produto pronto ou aprenda a construir o seu. Os dois caminhos
            terminam no mesmo lugar: você no comando.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* JARVIS card */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl bg-ink text-background overflow-hidden p-6 sm:p-8 lg:p-10 flex flex-col"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] opacity-60">
                  Produto físico
                </div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl mt-2">JARVIS Completo</h3>
              </div>
              <div className="rounded-full bg-background/10 backdrop-blur border border-background/20 px-3 py-1 text-xs font-mono">
                ◉ em estoque
              </div>
            </div>

            <div className="my-8 relative aspect-[4/3] rounded-2xl overflow-hidden bg-background/5">
              <img
                src={jarvisDevice}
                alt="Dispositivo JARVIS"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                loading="lazy"
                width={1280}
                height={1280}
              />
            </div>

            <ul className="space-y-3 mb-8">
              {jarvisFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 mt-0.5 shrink-0 opacity-80" />
                  <span className="opacity-90">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t border-background/15 pt-6">
              <div>
                <div className="text-xs font-mono opacity-60 uppercase tracking-wider">À vista</div>
                <div className="font-display text-3xl sm:text-4xl mt-1">R$499,00</div>
                <div className="text-xs opacity-60 mt-1">ou 10x de R$50 sem juros</div>
              </div>
              <a
                href="#"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-background text-ink px-5 py-3 text-sm font-medium md:hover:scale-[1.03] transition-transform"
              >
                Comprar agora →
              </a>
            </div>
          </motion.article>

          {/* Course card */}
          <motion.article
            id="curso"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative rounded-3xl bg-secondary text-ink overflow-hidden p-6 sm:p-8 lg:p-10 flex flex-col border hairline"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  Curso digital
                </div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl mt-2">
                  Construa seu JARVIS
                </h3>
              </div>
              <div className="rounded-full bg-ink text-background px-3 py-1 text-xs font-mono">
                –37%
              </div>
            </div>

            <div className="my-8 relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={courseFlatlay}
                alt="Workspace do curso"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                loading="lazy"
                width={1280}
                height={1280}
              />
            </div>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
              {courseModules.map((m, i) => (
                <li
                  key={m}
                  className="flex items-start gap-3 text-sm border-t hairline pt-2"
                >
                  <span className="font-mono text-xs text-muted-foreground mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t hairline pt-6">
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Acesso vitalício
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display text-3xl sm:text-4xl">R$289,99</span>
                  <span className="text-sm text-muted-foreground line-through">R$349,00</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">+ certificado oficial</div>
              </div>
              <a
                href="#"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-ink text-background px-5 py-3 text-sm font-medium md:hover:scale-[1.03] transition-transform"
              >
                Garantir vaga →
              </a>
            </div>
          </motion.article>
        </div>

        {/* Combo bar */}
        <div className="mt-6 rounded-2xl border hairline p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-ink text-background text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-1">
              Combo
            </span>
            <span className="text-sm">
              <strong className="font-display">JARVIS + Curso</strong> · pague{" "}
              <strong>R$789,98</strong>{" "}
              <span className="text-muted-foreground line-through">R$1199,99</span>
            </span>
          </div>
          <a
            href="#"
            className="text-sm font-medium underline underline-offset-4 hover:no-underline"
          >
            Levar os dois →
          </a>
        </div>
      </div>
    </section>
  );
}
