/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Webpack instead of Turbopack
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
