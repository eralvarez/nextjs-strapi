import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/strapi/:path*',
  //       destination: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/:path*`,
  //     },
  //   ];
  // },
};

export default nextConfig;
