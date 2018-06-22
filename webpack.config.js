'use strict';

const webpack = require("webpack");
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var getConfig = function (env) {
  const config = {
    mode: "production",
    context: __dirname, // to automatically find tsconfig.json
              
    entry: {
      main: ['./ARMClient/AzureHybridClient.ts']
    },
    output: {
      filename: 'azurehybridclient-bundle.js',
      path: path.join(__dirname, 'build'),
    },
    resolve: {
      extensions: [".ts", ".js"],
      modules: [
        'node_modules',
      ]
    },
    module: {
      rules: [
        { test: /\.tsx?$/, use: 'ts-loader' }
      ]
    },
    plugins: [
    ],
    externals: {
      "ms-rest-azure-js": "msRestAzure",
      "ms-rest-js": "msRest"
    },
    node: {
      fs: false,
      net: false,
      path: false,
      dns: false,
      tls: false,
      tty: false,
      v8: false,
      Buffer: false
    },
    target: 'web'
  };
    config.plugins.push(
      new UglifyJsPlugin({
        sourceMap: true,
        test: /\.js($|\?)/i
      })
    );
  return config
}

module.exports = getConfig;