import { Github, MessageCircle, ArrowLeft, ShieldCheck } from "lucide-react";
import { HudBackground } from "./HudBackground";

interface AccessPortalProps {
  name: string;
  expiresAt: number;
}

export function AccessPortal({ name, expiresAt }: AccessPortalProps) {
  const githubUrl = import.meta.env.VITE_GITHUB_REPO_URL || "https://github.com/Elytron/jarvis-private";
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5511973192940";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá,%20comprei%20o%20JARVIS%20e%20preciso%20de%20suporte.`;

  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 relative flex items-center justify-center font-sans overflow-hidden">
      <HudBackground />
      
      <div className="relative z-10 max-w-lg w-full">
        {/* Header/Greeting */}
        <div className="text-center mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="mx-auto w-24 h-24 mb-6 rounded-full border-2 border-cyan-500/50 flex items-center justify-center glow-pulse bg-cyan-500/5 relative">
            <ShieldCheck className="w-10 h-10 text-cyan-400" />
            <div className="absolute inset-0 rounded-full border border-cyan-400 animate-ping opacity-20"></div>
          </div>
          <h1 className="text-4xl font-bold mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Acesso Concedido
          </h1>
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
            Bem-vindo, {name}
          </p>
        </div>

        {/* Main Card */}
        <div className="glassmorphism p-8 rounded-2xl border border-white/10 animate-fade-up backdrop-blur-xl bg-black/40" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-mono text-gray-300">Pagamento verificado. Sistema JARVIS liberado.</span>
          </div>

          <div className="space-y-4">
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-900 to-black border border-gray-800 hover:border-cyan-500/50 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              <div className="relative flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white">Acessar JARVIS</h3>
                  <p className="text-xs text-gray-400 font-mono">Repositório Privado GitHub</p>
                </div>
              </div>
              <div className="relative text-cyan-400 font-mono text-xl group-hover:translate-x-1 transition-transform">→</div>
            </a>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-900 to-black border border-gray-800 hover:border-green-500/50 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              <div className="relative flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white">Suporte VIP</h3>
                  <p className="text-xs text-gray-400 font-mono">WhatsApp Exclusivo</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors font-mono">
            <ArrowLeft className="w-4 h-4" /> Voltar
          </a>
          <div className="text-xs text-gray-600 font-mono">
            Expira em: {new Date(expiresAt).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
