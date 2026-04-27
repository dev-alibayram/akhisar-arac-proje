import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WhatsAppFloat } from "@/components/common/WhatsAppFloat";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akhisar Araç Proje",
  description: "Motorlu taşıtlar için TSE uygunluk belgeleri ve danışmanlık hizmetleri.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
