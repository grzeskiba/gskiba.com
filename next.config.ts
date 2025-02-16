import type { NextConfig } from 'next';

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath:
    process.env.NODE_ENV === 'production' ? '/grzeskiba/gskiba.com' : '', // Add your repository name
};

module.exports = nextConfig;
