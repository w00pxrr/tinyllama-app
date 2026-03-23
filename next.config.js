/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Prevent bundling of packages with native dependencies for server-side only
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Mark these as external to prevent webpack from trying to bundle them
      config.externals = [...(config.externals || []), 'onnxruntime-node', '@xenova/transformers'];
    }
    return config;
  },
};

module.exports = nextConfig;
