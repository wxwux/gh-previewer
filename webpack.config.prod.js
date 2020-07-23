const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => {
  return {
    output: {
      publicPath: "/",
    },
    plugins: [
      new CleanWebpackPlugin({
        verbose: true
      }),
      new MiniCssExtractPlugin({
        filename: "[hash:8].css",
        chunkFilename: "[id].css",
      }),
      new TerserPlugin(),
    ],
    devtool: "none",
  };
};
