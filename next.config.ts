import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // `experimental.ppr` was removed and merged into `cacheComponents`.
    // Enable Partial Prerendering (PPR) via the new `cacheComponents` flag.
    // Set to `true` to enable the feature. If you relied on a specific
    // strategy previously, check Next.js release notes for more options.
    cacheComponents: true,
  },
};

export default nextConfig;
