const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});

module.exports = withMDX({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  },
  pageExtensions: ['js', 'mdx']
});
