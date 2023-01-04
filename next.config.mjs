import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import nextMDX from '@next/mdx';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    providerImportSource: '@mdx-js/react'
  }
});

const nextConfig = withMDX({
  pageExtensions: ['tsx', 'mdx'],
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: { subsets: ['latin'] }
      }
    ]
  }
});

export default nextConfig;
