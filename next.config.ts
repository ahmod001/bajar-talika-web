import type { NextConfig } from "next";


const isProduction = process.env.NEXT_PUBIC_PRODUCTION

const nextConfig: NextConfig = isProduction ? {
  output: 'export',
  basePath: '/bajar-talika-web',
  assetPrefix: '/bajar-talika-web',
  images: {
    unoptimized: true,
  }
} : {};

export default nextConfig;

