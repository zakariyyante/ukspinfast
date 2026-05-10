/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination: "https://qokbynptuwcxxogg.public.blob.vercel-storage.com/partners/:path*",
      },
    ];
  },
};

export default nextConfig;
