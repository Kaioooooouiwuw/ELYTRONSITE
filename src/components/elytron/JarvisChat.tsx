import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

type Msg = { role: "user" | "jarvis"; text: string };

const SUGGESTIONS = [
  "Acenda as luzes da sala",
  "Coloque uma música relaxante",
  "Que horas eu durmi ontem?",
  "Modo cinema, por favor",
];

const RESPONSES: Record<string, string> = {
  luz: "Luzes da sala em 40%, tom quente. Quer que eu ajuste a cozinha também?",
  acenda: "Pronto. Sala iluminada — preset 'fim de tarde' aplicado.",
  música: "Tocando 'Ambient Focus' no Spotify · volume 30%. Posso baixar mais?",
  musica: "Tocando 'Ambient Focus' no Spotify · volume 30%. Posso baixar mais?",
  durmi: "Você dormiu 7h12min. Qualidade do sono: 84%. Acordou 1 vez às 3h22.",
  dormi: "Você dormiu 7h12min. Qualidade do sono: 84%. Acordou 1 vez às 3h22.",
  cinema: "Modo cinema ativado. Cortinas fechando, luzes em 5%, TV ligando.",
  olá: "Olá. Estou aqui. O que você precisa?",
  ola: "Olá. Estou aqui. O que você precisa?",
};

function reply(input: string) {
  const lower = input.toLowerCase();
  for (const k of Object.keys(RESPONSES)) {
    if (lower.includes(k)) return RESPONSES[k];
  }
  return "Entendido. Estou processando isso e vou te avisar em instantes.";
}

export function JarvisChat() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "jarvis", text: "Sistema online. Pode falar — eu te escuto." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    const v = text.trim();
    if (!v) return;
    setMessages((m) => [...m, { role: "user", text: v }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "jarvis", text: reply(v) }]);
      setTyping(false);
    }, 700 + Math.random() * 600);
  };

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
              04 — Experimente
            </div>
            <h2 className="display-mega text-5xl lg:text-6xl">
              Converse com o
              <br />
              <span className="italic font-light">JARVIS agora.</span>
            </h2>
            <p className="mt-6 text-ink-soft max-w-md">
              Esta é uma simulação interativa. Digite um comando ou escolha uma sugestão
              — você terá uma amostra de como é falar com a IA todos os dias.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border hairline px-4 py-2 text-xs hover:bg-secondary transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border hairline bg-background overflow-hidden shadow-elevated">
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b hairline">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-ink animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-[0.18em]">
                    jarvis · canal local
                  </span>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">
                  enc. AES-256
                </span>
              </div>

              <div ref={scrollRef} className="h-[420px] overflow-y-auto p-5 space-y-3">
                <AnimatePresence initial={false}>
                  {messages.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                          m.role === "user"
                            ? "bg-ink text-background rounded-br-sm"
                            : "bg-secondary text-ink rounded-bl-sm"
                        }`}
                      >
                        {m.role === "jarvis" && (
                          <div className="font-mono text-[10px] opacity-60 mb-1 uppercase tracking-[0.15em]">
                            jarvis
                          </div>
                        )}
                        {m.text}
                      </div>
                    </motion.div>
                  ))}
                  {typing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-secondary rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className="h-1.5 w-1.5 rounded-full bg-ink/60 animate-bounce"
                            style={{ animationDelay: `${i * 0.15}s` }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="border-t hairline p-3 flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite um comando para o JARVIS…"
                  maxLength={200}
                  className="flex-1 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className="h-10 w-10 rounded-full bg-ink text-background flex items-center justify-center hover:scale-105 transition-transform"
                  aria-label="Enviar"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
            <div className="mt-3 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground text-right">
              simulação · respostas pré-programadas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
