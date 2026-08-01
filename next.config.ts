import withSvgr from "next-plugin-svgr";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [90, 100],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/uikit",
        destination: "/uikit/button",
        permanent: true,
      },
    ];
  },
};

export default withSvgr(nextConfig);
