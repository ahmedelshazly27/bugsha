import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bugsha — Tonight’s best food is already made",
  description: "Discover surprise food bundles from bakeries, cafés and co-ops across Kuwait. Reserve in the app and collect in person.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
