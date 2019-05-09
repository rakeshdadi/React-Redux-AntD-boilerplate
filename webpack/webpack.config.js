const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const Dotenv = require('dotenv-webpack');


module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'assets'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader',
      }, {
        test: /\.css/,
        loader: 'style-loader!css-loader',
      }, {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: { limit: 1000000 },
      }, {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    contentBase: './assets',
    filename: './app.js',
    port: '3200',
    historyApiFallback: true,
    // hot: true,
  },
  plugins: [
    new Dotenv({
      path: './.env',
      safe: false,
    }),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html',
    }),
    new CopyWebpackPlugin([
      {from:'./src/images',to:'images'},
      {from:'./src/fonts',to:'fonts'},
    ]),
  ],
};
