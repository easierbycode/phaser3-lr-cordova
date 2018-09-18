const path              = require('path');
const webpack           = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const nodeModules       = path.join(__dirname, './node_modules/');


const browserSyncPlugin = new BrowserSyncPlugin(
  {
    host: process.env.IP || 'localhost',
    port: process.env.PORT || 3000,
    proxy: 'http://localhost:8080/'
  },
  { reload: false }
);

module.exports = (env, options) => {
  return {
    devServer: {
      contentBase: 'src',
      host: '0.0.0.0'
    },
    mode: 'development',
    output: {
      path: path.join(__dirname, './dist'),
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      publicPath: '/'
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [browserSyncPlugin],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [nodeModules],
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(png|jpg|gif|ico|svg|pvr|pkm|static|ogg|mp3|wav)$/,
          exclude: [nodeModules],
          use: ['file-loader']
        },
        {
          test: [/\.vert$/, /\.frag$/],
          exclude: [nodeModules],
          use: 'raw-loader'
        },

        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]_[local]_[hash:base64]',
                sourceMap: true,
                minimize: true
              }
            }
          ]
        }
      ]
    }
  };
};