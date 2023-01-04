module.exports = async (_phase, _config) => {
  const { default: remarkMath } = await import('remark-math');
  const { default: rehypeKatex } = await import('rehype-katex');

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
      providerImportSource: '@mdx-js/react'
    }
  });

  return withMDX({
    pageExtensions: ['js', 'tsx', 'mdx'],
    experimental: {
      fontLoaders: [
        {
          loader: '@next/font/google',
          options: { subsets: ['latin'] }
        }
      ]
    }
  });
};
