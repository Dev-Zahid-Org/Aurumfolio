import type {NextConfig} from 'next';

const repo = 'Aurumfolio';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: isProd ? `/${repo}/` : '',
  basePath: isProd ? `/${repo}` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
