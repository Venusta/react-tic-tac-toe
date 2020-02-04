/* eslint-disable */

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


const PATH_DIST = path.join(__dirname, "./dist");
const PATH_SOURCE = path.join(__dirname, "./src");
const isProduction = process.argv.indexOf("-p") >= 0 || process.env.NODE_ENV === "production";


module.exports = {
  mode: "production",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  devServer: {
    contentBase: PATH_DIST,
    compress: true,
    host: "localhost",
    port: 9000,
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  entry: [
    path.join(PATH_SOURCE, "./index.tsx"),
  ],
  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".js", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: [
          {
            options: {
              eslintPath: require.resolve("eslint"),

            },
            loader: require.resolve("eslint-loader"),
          },
        ],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development", // use "development" unless process.env.NODE_ENV is defined
      DEBUG: false,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(PATH_SOURCE, "./index.html"),
    }),
  ],
};
