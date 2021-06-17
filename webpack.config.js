const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      { test: /\.(scss|css)$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.(js)$/, use: "babel-loader" }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src/index.html")
    })
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    open: true
  }

}