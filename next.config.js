module.exports = async (phase, { defaultConfig }) => {
  const { default: remarkMath } = await import('remark-math');
  const { default: rehypeKatex } = await import('rehype-katex');

  const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
      providerImportSource: '@mdx-js/react'
    }
  });

  return withMDX({
    pageExtensions: ['js', 'tsx', 'mdx']
  });
};
