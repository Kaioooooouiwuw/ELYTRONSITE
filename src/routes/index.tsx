import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/elytron/Header";
import { Hero } from "@/components/elytron/Hero";
import { Products } from "@/components/elytron/Products";
import { Demo } from "@/components/elytron/Demo";
import { JarvisChat } from "@/components/elytron/JarvisChat";
import { Testimonials } from "@/components/elytron/Testimonials";
import { CTA } from "@/components/elytron/CTA";
import { Footer } from "@/components/elytron/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elytron · Seu próprio JARVIS, agora real" },
      {
        name: "description",
        content:
          "Assistente de IA que aprende com você e transforma sua casa em um organismo inteligente. JARVIS por R$500 e curso oficial por R$190.",
      },
      { property: "og:title", content: "Elytron · Seu próprio JARVIS, agora real" },
      {
        property: "og:description",
        content:
          "IA local, automação residencial e curso para construir seu próprio JARVIS.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Products />
        <Demo />
        <JarvisChat />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
