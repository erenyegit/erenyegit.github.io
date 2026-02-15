/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Hata olsa bile build'e devam etsin
  },
  typescript: {
    ignoreBuildErrors: true, // Tip hatalarını görmezden gelsin
  },
};

export default nextConfig;