import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    // enables the SWC transform that avoids class-name mismatches
    styledComponents: true,
  },
};

export default nextConfig;
