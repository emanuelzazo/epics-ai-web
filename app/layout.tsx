import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/app/context/LanguageContext";
import { WhatsAppFloatButton } from "@/components/ui/whatsapp-float-button";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EPICS AI — Tecnología Inteligente para Empresas Inteligentes",
  description:
    "EPICS AI ayuda a empresas cubanas a vender más mediante IA, automatización de WhatsApp, inventario digital y desarrollo web para MIPYMES y TCP.",
  keywords:
    "inteligencia artificial Cuba, automatización WhatsApp, inventario digital, MIPYMES Cuba, desarrollo web Cuba",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <LanguageProvider>
          {children}

          {/* Floating WhatsApp button (translated via client component) */}
          <WhatsAppFloatButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
