import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "grateful-mosquito-699.convex.cloud",
        protocol: "https",
        port: "",
      },
      {
        hostname: "lovable-bloodhound-237.convex.cloud",
        protocol: "https",
        port: "",
      },
      {
        hostname: "deafening-ladybug-392.convex.cloud",
        protocol: "https",
      },
      {
        hostname: "sleek-crocodile-881.eu-west-1.convex.cloud",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
