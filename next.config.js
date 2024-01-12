/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["zuthrljedeumnbkyccte.supabase.co"],
  },
};

module.exports = nextConfig;
