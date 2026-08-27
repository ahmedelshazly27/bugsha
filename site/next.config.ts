import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every route here is static, so export a plain directory of HTML/CSS/JS.
  // That lets the site be served by any static host, and in particular lets a
  // build launched from the repo root (Vercel's bugsha-launch project) publish
  // it without Next.js having to be a root-level dependency.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
