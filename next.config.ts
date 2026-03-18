import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [],
    },
    experimental: {
        optimizePackageImports: ["lucide-react"],
    },
};

export default nextConfig;
