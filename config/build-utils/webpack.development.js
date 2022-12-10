const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
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
          options: {
            plugins: ['react-refresh/babel'],
          },
        },
      },
    ],
  },
  devServer: {
    port: 3001,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new InterpolateHtmlPlugin({
      REACT_APP_IDP_URI: 'http://localhost:4001',
    }),
  ],
  devtool: 'inline-source-map',
})
