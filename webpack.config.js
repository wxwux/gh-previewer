const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const mergeConfig = require("webpack-merge");
const devConfig = require("./webpack.config.dev")();
const prodConfig = require("./webpack.config.prod")();

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";
  process.env.BABEL_ENV = argv.mode;

  const js = {
    test: /\.(js)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  };

  const html = {
    test: /\.html$/,
    use: [
      {
        loader: "html-loader",
      },
    ],
  };

  const css = {
    test: /\.css$/,
    use: ["style-loader", "css-loader", "postcss-loader"],
  };

  const svg = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const config = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./docs"),
      filename: "[name].[hash].build.js",
      chunkFilename: "[contenthash].js",
      publicPath: "/",
    },
    module: {
      rules: [js, html, css, svg],
    },
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
      }
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, "index.html"),
      }),
    ],
  };

  return isDev
    ? mergeConfig(config, devConfig)
    : mergeConfig(config, prodConfig);
};
