import type { Metadata } from "next";
import { OpsConsole } from "../components/OpsConsole";

// Internal: the partner request queue. Ops users only (the platform's
// app.ops_* RPCs refuse anyone else); never indexed.
export const metadata: Metadata = {
  title: "Bugsha Ops — Partner requests & codes",
  robots: { index: false, follow: false, nocache: true },
};

export default function OpsPage() {
  return <OpsConsole />;
}
