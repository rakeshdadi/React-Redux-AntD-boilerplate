const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, '../assets'),
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new Dotenv({
      path: './.env.production',
      safe: false,
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ja|it/),
    new CleanWebpackPlugin(['./assets'], { root: process.cwd() }),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html',
    }),
    new CopyWebpackPlugin([
      {from:'./src/images',to:'images'},
      {from:'./src/fonts',to:'fonts'},
    ]),
    new ExtractTextPlugin({
      filename: './assets/styles.bundle.css',
      allChunks: true
    })
  ],
};
