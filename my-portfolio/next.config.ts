import type { NextConfig } from "next";
const repo = 'Portfolio'; 
const nextConfig: NextConfig = {
  eslint: {
    // ⚠️ Allows build even with lint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // optional – same idea for TS
  },
  /* config options here */
  compiler: {
    // enables the SWC transform that avoids class-name mismatches
    styledComponents: true,
  },
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,                  // 💡 key line
  assetPrefix: `/${repo}/`,              // ensures <link> & <script> URLs are correct
  trailingSlash: true      
};

export default nextConfig;
