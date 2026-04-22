import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    // Prevent Turbopack from inferring the wrong workspace root (e.g. picking a lockfile above this project).
    root: projectRoot,
  },
};

export default nextConfig;
