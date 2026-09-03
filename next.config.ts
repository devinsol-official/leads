import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent aggressive filesystem lock issues on Windows
  distDir: ".next",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-src 'self' https://www.youtube.com https://youtube.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
