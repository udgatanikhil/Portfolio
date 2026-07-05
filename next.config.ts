import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export", // static export for Cloudflare Pages
  images: {
    unoptimized: true, // required for static export
  },
};

const withMDX = createMDX({
  // options if any
});

export default withMDX(nextConfig);
