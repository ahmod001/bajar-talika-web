import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/bajar-talika-web',
  assetPrefix: '/bajar-talika-web',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;

