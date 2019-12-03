const pathLib = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ConcatPlugin = require('webpack-concat-plugin');
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const dist = pathLib.resolve(__dirname, "./dist")
const pathToWebpageToolsMap = './node_modules/@addressfinder/addressfinder-webpage-tools/lib/addressfinder-webpage-tools.map.js'

let config = {
  entry: ["./src/woocommerce_plugin.js"],
  output: {
    path: dist
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components(?!\/addressfinder-webpage-tools)/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  }
}


switch (process.env.NODE_ENV) {
  case "production":
    config.devtool = 'source-map'
    config.output.filename = "addressfinder.min.js"
    // config.output.sourceMapFilename = 'addressfinder.map.js'
    config.optimization = {
      minimizer: [
        new TerserPlugin({
          sourceMap: true,
          terserOptions: {
            warnings: false
          }
        })
      ]
    }
    config.plugins = [
      // new CopyPlugin([
      //   { from: pathToWebpageToolsMap, to: pathLib.resolve(__dirname, "./dist") }
      // ]),
      // new ConcatPlugin({
      //   name: 'addressfinder-new.map',
      //   filesToConcat: ["./dist/addressfinder.min.js.map", "./dist/addressfinder-webpage-tools.map.js"]
      // }),
      // new webpack.SourceMapDevToolPlugin({
      //   filename: '[file].map',
      //   append: '\n//# sourceMappingURL=addressfinder-webpage-tools.map.js',
      // })
    ]
    break;
  default:
    config.output.filename = "addressfinder.js"
    config.optimization = {
      minimizer: []
    }
    config.plugins = []
}

module.exports = config;
