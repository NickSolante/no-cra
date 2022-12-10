const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const WebpackAssetsManifest = require('webpack-assets-manifest')

module.exports = () => ({
  output: {
    filename: 'static/js/[name].[contenthash].js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.(js|ts)x?$/,
        parallel: true,
      }),
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: () => false,
    },
    runtimeChunk: false,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'assets',
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new WebpackAssetsManifest({
      entrypoints: true,
    }),
    new CompressionPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
    }),
    new InterpolateHtmlPlugin({}),
  ],
})
