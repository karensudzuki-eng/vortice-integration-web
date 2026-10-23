/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/diagnostico",
        destination: "/levantamiento",
        permanent: true,
      },
      {
        source: "/acompanamiento",
        destination: "/levantamiento",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
