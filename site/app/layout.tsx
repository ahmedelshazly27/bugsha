import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

// Archivo is the brand face. Loaded through next/font so it is self-hosted and
// emitted with the static export — globals.css referenced "Archivo" before this
// but nothing fetched it, so every page silently fell back to system-ui.
// No `weight` on purpose: Archivo is a variable font, and naming discrete
// weights makes next/font serve static instances instead of the axis. The
// design uses in-between values (the hero h1 is font-weight:760), which snap to
// 700 or 800 without the full 100-900 range — and the headline then wraps onto
// an extra line.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bugsha — Tonight’s best food is already made",
  description:
    "Surprise bundles from local bakeries, cafés and co-ops in Kuwait and Egypt—freshly packed at closing and worth around three times what you pay. Join the waitlist.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
