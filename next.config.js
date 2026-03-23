/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Prevent bundling of packages with native dependencies for server-side only
  webpack: (config, { isServer, defaultLoaders }) => {
    if (isServer) {
      // Mark these as external to prevent webpack from trying to bundle them
      config.externals = [
        ...(config.externals || []), 
        'onnxruntime-node', 
        '@xenova/transformers',
        'sharp',
      ];
    }
    return config;
  },
};

module.exports = nextConfig;
