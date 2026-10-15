import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Esleidin Yasser Matos Lara | Technology Director & Software Architect",
  description: "Portafolio profesional bilingüe de Esleidin Yasser Matos Lara, Director de Tecnología e Ingeniero en Sistemas con más de 18 años de experiencia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${jakarta.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-950 text-slate-100" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}