import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Navya Nori - Personal Site",
  description: "Welcome to my personal site!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex justify-center gap-8">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/portfolio" className="hover:underline">
              Portfolio
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </nav>
        </header>
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
