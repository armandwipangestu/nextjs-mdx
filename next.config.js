// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  experimental: {
    esmExternals: true, // Tambahkan ini
  },
});
