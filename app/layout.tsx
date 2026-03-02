import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://site-dra-maiara.vercel.app"),
  title: "Dra. Maiara | Psicologia Clínica & Neuropsicologia",
  description:
    "Acolhimento especializado para ajudar você a navegar por suas emoções e construir uma vida mais equilibrada e significativa.",
  keywords: [
    "psicologia",
    "neuropsicologia",
    "terapia",
    "saúde mental",
    "Dra. Maiara",
  ],
  authors: [{ name: "Dra. Maiara" }],
  openGraph: {
    title: "Dra. Maiara | Psicologia Clínica & Neuropsicologia",
    description: "Um espaço para florescer sua melhor versão.",
    url: "https://maiaramartins.com.br", // Substitua pelo domínio final depois
    siteName: "Dra. Maiara",
    images: [
      {
        url: "/hero-maiara.jpeg", // Imagem que aparecerá no compartilhamento
        width: 1200,
        height: 630,
        alt: "Dra. Maiara - Psicóloga Clínica",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-off-white)]`}
      >
        {children}
      </body>
    </html>
  );
}
