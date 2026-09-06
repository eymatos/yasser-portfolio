/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Esto desactiva el optimizador y permite cualquier URL externa libremente
  },
};

module.exports = nextConfig;