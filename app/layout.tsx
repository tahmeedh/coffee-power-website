import type { Metadata } from "next";
import { EB_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/ui/LoadingScreen";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coffee Power — Café de Especialidad Premium",
  description:
    "21 cafés de especialidad de origen único seleccionados por Chris Rosas. Pequeño lote. Calidad specialty. Directo del origen.",
  keywords: ["café de especialidad", "origen único", "Coffee Power", "Chris Rosas", "España"],
  openGraph: {
    title: "Coffee Power",
    description: "21 orígenes. Una obsesión.",
    siteName: "Coffee Power",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${ebGaramond.variable} ${manrope.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-surface antialiased">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
