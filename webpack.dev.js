const path = require('path');
const config = require('./webpack.config');
const { merge } = require('webpack-merge');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = merge(config, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new TsConfigPathsPlugin({
      configFile: path.resolve(__dirname, 'tsconfig.json'),
    }),
  ],
  devServer: {
    static: './dist',
  },
});
