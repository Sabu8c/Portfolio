import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [],
    },
    experimental: {
        optimizePackageImports: ["lucide-react"],
    },
};

export default nextConfig;
