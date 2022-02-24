/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'buttercms.com',
      'www.mlguides.com',
      'styled-components.com',
      'prettier.io',
    ],
  },
};

module.exports = nextConfig;
