import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Navya Nori - Personal Site",
  description: "Welcome to my personal site!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${dmSans.variable} font-sans antialiased bg-white text-gray-800`}
      >
        <header className="bg-white/90 backdrop-blur border-b border-coral/30 sticky top-0 z-50">
          <nav className="flex justify-center gap-10 p-4 font-heading">
            <a href="/#hero" className="text-coral hover:text-sage font-medium transition-colors">
              Home
            </a>
            <a href="/#projects" className="text-coral hover:text-sage font-medium transition-colors">
              Projects
            </a>
            <a href="/#blog" className="text-coral hover:text-sage font-medium transition-colors">
              Blog
            </a>
          </nav>
        </header>
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
