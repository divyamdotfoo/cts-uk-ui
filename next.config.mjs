/** @type {import('next').NextConfig} */
const nextConfig = {
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
  redirects: async () => [
    { source: "/plans", destination: "/plans/three", permanent: true },
  ],
};

export default nextConfig;
