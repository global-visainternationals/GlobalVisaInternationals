// next.config.mjs

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
    config.cache = false;
    return config;
  },
};

export default withMDX(nextConfig);
