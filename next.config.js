/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  // images: {
  //   domains: ['lh3.googleusercontent.com'],
  //   domains: ['https://images.unsplash.com'],
  //   domains: ['https://tailwindui.com'],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: 'lh3.googleusercontent.com',
        hostname: 'images.unsplash.com',
        hostname: 'tailwindui.com',
        port: '',
      },
    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig
