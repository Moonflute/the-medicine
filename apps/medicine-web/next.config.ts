import type { NextConfig } from "next";
import packageJson from "./package.json";

const repoName = "the-medicine";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  // Lets isolated local verification run without touching another Next dev server's .next lock.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  trailingSlash: true,
  experimental: {
    // The static export generates a large number of note pages. Keep the
    // worker count bounded so local/CI builds remain within memory.
    cpus: 1,
  },
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: isGitHubPages ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_APP_VERSION: packageJson.version,
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
