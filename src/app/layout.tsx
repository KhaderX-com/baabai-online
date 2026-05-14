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
  title: "BAABAI LTD",
  description: "Mobile Applications and Games Publishing Services",
};

const navLinks = [
  { href: "/privacy-policy", label: "privacy policy" },
  { href: "/terms-of-service", label: "terms of service" },
  { href: "/contact", label: "contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-zinc-900 flex flex-col">
        <header className="border-b border-zinc-200 bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/70 sticky top-0 z-50">
          <nav className="mx-auto w-full max-w-7xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-sm sm:text-base font-semibold tracking-wide">
              BAABAI LTD
            </Link>
            <ul className="flex items-center gap-4 sm:gap-6 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-700 hover:text-zinc-950 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-zinc-200 bg-zinc-50">
          <div className="mx-auto w-full max-w-7xl px-6 py-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold tracking-wide">BAABAI LTD</p>
              <ul className="flex items-center gap-4 sm:gap-6 text-sm">
                {navLinks.map((link) => (
                  <li key={`footer-${link.href}`}>
                    <Link
                      href={link.href}
                      className="text-zinc-700 hover:text-zinc-950 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-zinc-200 pt-4 text-xs sm:text-sm text-zinc-600 space-y-1">
              <p>Carlisle Business Centre Carlisle Road BRADFORD, BD8 8BD United Kingdom</p>
              <p>
                Contact: {" "}
                <a
                  href="mailto:contact@baabai.online"
                  className="underline hover:text-zinc-900"
                >
                  contact@baabai.online
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
