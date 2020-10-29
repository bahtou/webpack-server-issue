const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry:  './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'index.js'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
      rules: [
          { test: /\.tsx?$/, loader: 'ts-loader' }
      ]
  },
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        ['My App']: 'just some stuff here'
      },
      inject: true,
      hash: true,
      cache: true,
      showErrors: true,
      chunksSortMode: 'auto'
    })
  ]
};
