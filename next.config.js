const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/
});

module.exports = withMDX({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  },
  pageExtensions: ['js', 'mdx']
});
