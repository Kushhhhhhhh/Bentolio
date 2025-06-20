import type { Metadata } from "next";
import "./globals.css";
import {
  Inter,
  Poppins,
  David_Libre,
  Fira_Code,
  Lora,
  Spectral,
} from "next/font/google";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const davidLibre = David_Libre({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-david-libre",
});

const firaCode = Fira_Code({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fira-code",
});

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
});

const spectral = Spectral({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-spectral",
});

export const metadata: Metadata = {
  title: "Bentolio - Kush Sharma",
  description: "Building stunning web applications with Next.js and React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${davidLibre.variable} ${firaCode.variable} ${lora.variable} ${spectral.variable} antialiased bg-[#11120d] text-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}