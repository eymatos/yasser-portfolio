/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Asegura que las imágenes estáticas de la carpeta public se sirvan correctamente en Vercel
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;