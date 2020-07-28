const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => ({
  output: {
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new TerserPlugin(),
  ],
  devtool: "none",
});
