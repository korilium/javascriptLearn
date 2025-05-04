// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/index.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
            filename: "index.html",
      chunks: ["main"], // Only include main.js
    }),
    new HtmlWebpackPlugin({
      template: "./src/calculator.html",
      filename: "calculator.html",
      chunks: [], // No JS bundle, or specify if you want to include one
    }),
    new HtmlWebpackPlugin({
      template: "./src/library.html",
      filename: "library.html",
      chunks: [],
    }),
    new HtmlWebpackPlugin({
      template: "./src/dom.html",
      filename: "dom.html",
      chunks: [],
    }),
    new HtmlWebpackPlugin({
      template: "./src/Etch-a-Sketch.html",
      filename: "Etch-a-Sketch.html",
      chunks: [],
    }),
    new HtmlWebpackPlugin({
      template: "./src/rockPaperScissors.html",
      filename: "rockPaperScissors.html",
      chunks: [],
    }),
    new HtmlWebpackPlugin({
      template: "./src/TicTacToe.html",
      filename: "TicTacToe.html",
      chunks: [],
      
    }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "src/*.css", to: "[name][ext]" },
        ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};