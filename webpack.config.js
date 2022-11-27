const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env)

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = (env, { mode, configName }) => {
  return merge(
    {
      entry: './src/index.tsx',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
        new webpack.ProgressPlugin(),

        new webpack.HotModuleReplacementPlugin(),
      ],
      module: {
        rules: [
          {
            test: /\.(js|ts)x?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                // ... other options
                // DO NOT apply the Babel plugin in production mode!
                plugins: [
                  isDevelopment && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
              },
            },
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
      },
    },
    modeConfig(mode)
  )
}
