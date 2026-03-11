import { ReactNode } from "react";
import { TopHeader } from "./TopHeader";
import { MobileStickyCTA } from "./MobileStickyCTA";
import { Footer } from "./Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />

      <main className="min-h-screen">
        {children}
        <Footer />
      </main>

      <MobileStickyCTA />
      <WhatsAppButton />
    </div>
  );
}
