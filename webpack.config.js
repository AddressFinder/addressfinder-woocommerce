const webpack = require("webpack");
const pathLib = require("path");

const config = {
  entry: [
    "./src/woocommerce_plugin.js"
  ],
  devtool: "source-map",
  output: {
    path: pathLib.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

switch (process.env.NODE_ENV) {
  case "production":
    config.output.filename = "addressfinder.min.js";
    config.plugins = [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      })
    ]
    break;
  default:
    config.output.filename = "addressfinder.js";
    config.plugins = [];
}

module.exports = config;
