const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'some-path': './index.jsx'
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'bundle.[name].[hash].js'
  },

  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /.+\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', 'babel-preset-preact']
          }
        }
      }
    ]
  }
};
