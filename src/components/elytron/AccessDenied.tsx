import { ShieldAlert } from "lucide-react";

export function AccessDenied() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] text-white p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-[#050505] to-[#050505] z-0"></div>
      
      <div className="relative z-10 max-w-md w-full p-8 rounded-2xl glassmorphism border border-red-500/20 text-center animate-rise">
        <div className="mx-auto w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-red-500/10 border border-red-500/30">
          <ShieldAlert className="w-10 h-10 text-red-500" />
        </div>
        
        <h1 className="text-3xl font-bold mb-2 font-mono tracking-tight">ACESSO NEGADO</h1>
        <p className="text-gray-400 mb-8 font-mono text-sm">
          Token de segurança inválido ou expirado. Seu acesso não pôde ser verificado.
        </p>
        
        <a 
          href="/"
          className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
        >
          Retornar à página principal
        </a>
      </div>
    </div>
  );
}
