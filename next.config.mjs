/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      config.cache = false; // ✅ Disable Webpack persistent caching
      return config;
    },
  };
  
  export default nextConfig;
  