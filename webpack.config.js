const webpack = require("webpack");
const pathLib = require("path");

let config = {
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
        }
      }
    ]
  }
}

switch (process.env.NODE_ENV) {
  case "production":
    config.entry = ["./dist/addressfinder.js"]
    config.devtool = "source-map"
    config.output.filename = "addressfinder.min.js"
    config.plugins = [
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: { warnings: false }
      })
    ]
    break;
  default:
    config.entry = ["./src/woocommerce_plugin.js"]
    config.output.filename = "addressfinder.js"
}

module.exports = config;
