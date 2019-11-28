const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const pathLib = require("path");

let config = {
  output: {
    path: pathLib.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components(?!\/addressfinder-webpage-tools)/,
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
    config.output.sourceMapFilename = 'addressfinder.map.js'
    config.optimization = {
      minimizer: [
        new UglifyJsPlugin({
          sourceMap: true,
          uglifyOptions: {
            warnings: false
          }
        })
      ]
    }
    break;
  default:
    config.entry = ["./src/woocommerce_plugin.js"]
    config.output.filename = "addressfinder.js"
    config.optimization = {
      minimizer: []
    }
}

module.exports = config;
