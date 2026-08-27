import type { NextConfig } from "next";
import { execSync } from "child_process";

let lastModified = "";
try {
  lastModified = execSync("git log -1 --format=%ci")
    .toString()
    .trim()
    .slice(0, 10);
} catch {
  // not a git repo or git unavailable
}

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_LAST_MODIFIED: lastModified,
  },
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
