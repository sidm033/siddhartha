import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/siddhartha',
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
