import { motion } from "framer-motion";
import { Play } from "lucide-react";
import smartHome from "@/assets/smart-home.jpg";
import { useState } from "react";
import jarvisVideo from "../../../jarvis.video.mp4";

export function Demo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="demo" className="relative py-24 lg:py-32 bg-ink text-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] opacity-60 mb-3">
              03 — Demonstração
            </div>
            <h2 className="display-mega text-5xl lg:text-7xl">
              Veja o JARVIS
              <br />
              <span className="italic font-light opacity-80">em ação.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-base opacity-70 max-w-md">
            Dois minutos. Você fala, ele responde, sua casa obedece. Sem treinamento,
            sem app, sem aprendizado curva — apenas conversa.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`relative w-full aspect-video rounded-3xl overflow-hidden group ${
            playing ? "" : "cursor-pointer"
          }`}
          onClick={() => {
            if (!playing) setPlaying(true);
          }}
        >
          {playing ? (
            <video
              src={jarvisVideo}
              className="absolute inset-0 h-full w-full object-cover"
              onClick={(e) => e.stopPropagation()}
              controls
              autoPlay
              playsInline
              controlsList="nodownload"
            />
          ) : (
            <img
              src={smartHome}
              alt="Demonstração JARVIS em ambiente residencial"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 md:group-hover:scale-105"
              loading="lazy"
              width={1920}
              height={1080}
            />
          )}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent ${
              playing ? "pointer-events-none" : ""
            }`}
          />

          {/* Play */}
          {!playing && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-background/40 animate-pulse-ring" />
                <button
                  aria-label="Reproduzir vídeo"
                  className="relative h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full bg-background text-ink flex items-center justify-center transition-transform md:group-hover:scale-110"
                >
                  <Play className="h-6 w-6 sm:h-7 sm:w-7 ml-1 fill-current" />
                </button>
              </div>
            </div>
          )}

          {/* Bottom meta */}
          <div
            className={`absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8 flex flex-wrap items-end justify-between gap-4 ${
              playing ? "pointer-events-none" : ""
            }`}
          >
            <div>
              <div className="text-xs font-mono opacity-70 uppercase tracking-[0.2em]">
                Vídeo · 02:14
              </div>
              <div className="font-display text-2xl mt-1">"Olá Jarvis, é hora de dormir."</div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono opacity-80">
              <span className="h-2 w-2 rounded-full bg-background animate-pulse" />
              4K · sem cortes
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
