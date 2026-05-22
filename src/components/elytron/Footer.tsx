import elytronLogo from "../../../logo-elytron.png";

export function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <img
                src={elytronLogo}
                alt="Elytron"
                className="h-8 w-auto object-contain rounded drop-shadow-sm"
                loading="lazy"
              />
              <span className="font-display text-lg font-semibold">elytron</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-ink-soft">
              Inteligência artificial e automação residencial feitas no Brasil,
              rodando 100% na sua casa.
            </p>
            <form className="mt-6 flex max-w-sm rounded-full border hairline overflow-hidden">
              <input
                type="email"
                required
                placeholder="seu@email.com"
                className="flex-1 bg-transparent px-4 py-3 text-sm outline-none"
              />
              <button className="bg-ink text-background px-5 text-sm font-medium hover:opacity-90">
                Assinar
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            {[
              {
                title: "Produto",
                links: ["JARVIS", "Curso", "Combo", "Roadmap"],
              },
              {
                title: "Empresa",
                links: ["Sobre", "Manifesto", "Imprensa", "Contato"],
              },
              {
                title: "Suporte",
                links: ["Documentação", "Garantia", "Política de privacidade", "Termos"],
              },
            ].map((col) => (
              <div key={col.title}>
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  {col.title}
                </div>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="hover:underline underline-offset-4">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t hairline flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <span>© 2026 Elytron · Todos os direitos reservados</span>
          <span>Feito com obsessão em São Paulo · BR</span>
        </div>
      </div>
    </footer>
  );
}
