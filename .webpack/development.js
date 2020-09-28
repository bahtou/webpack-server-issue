const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry:  path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../build/'),
    filename: 'index.js'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    port: 8080,
    contentBase: path.resolve(__dirname, '../src')
  },
  module: {
      rules: [
          { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
      ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../src'),
      'node_modules'
    ],
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
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
