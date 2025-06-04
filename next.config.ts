import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sun4cni3pvehbme1.public.blob.vercel-storage.com"
      }
    ]
  }
};

export default nextConfig;
