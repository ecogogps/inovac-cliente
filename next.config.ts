import type { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 50000,
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
            maxSize: 50000,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            reuseExistingChunk: true,
            maxSize: 50000,
          },
          tailwind: {
            test: /tailwind/,
            name: 'tailwind',
            priority: 10,
            reuseExistingChunk: true,
          },
        },
      };

      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      config.optimization.minimize = true;
    }
    return config;
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**.githubassets.com" },
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "**.googleusercontent.com" },
      { protocol: "https", hostname: "**.unsplash.com" },
      { protocol: "https", hostname: "api.github.com" },
      { protocol: "https", hostname: "inovaconstrucciones.com" },
      { protocol: "https", hostname: "ucarecdn.com" },
    ],
  },

  eslint: { ignoreDuringBuilds: true },
} satisfies NextConfig;

export default withBundleAnalyzer(nextConfig);
