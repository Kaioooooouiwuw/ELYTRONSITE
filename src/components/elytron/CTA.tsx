import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-ink text-background overflow-hidden p-10 lg:p-20"
        >
          <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] opacity-60 mb-4">
                Última chamada
              </div>
              <h2 className="display-mega text-5xl lg:text-7xl xl:text-8xl">
                A casa do futuro
                <br />
                <span className="italic font-light">já existe.</span>
              </h2>
              <p className="mt-6 max-w-lg opacity-70">
                Edição Founders limitada a 500 unidades. Garantia de 1 ano,
                7 dias para devolução, frete grátis para todo o Brasil.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="https://go.perfectpay.com.br/PPU38CQCA72"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between rounded-full bg-background text-ink px-6 py-4 text-base font-medium hover:scale-[1.02] transition-transform"
              >
                Comprar JARVIS
                <span className="font-mono text-sm">R$189,99 →</span>
              </a>
              <a
                href="https://go.perfectpay.com.br/PPU38CQCA72"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between rounded-full border border-background/20 px-6 py-4 text-base font-medium hover:bg-background/10 transition-colors"
              >
                Combo + curso
                <span className="font-mono text-sm">R$319,98 →</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
