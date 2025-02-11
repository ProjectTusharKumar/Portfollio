const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gist.githubusercontent.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
