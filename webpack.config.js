const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const mergeConfig = require("webpack-merge");
const devConfig = require("./webpack.config.dev")();
const prodConfig = require("./webpack.config.prod")();

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";
  process.env.BABEL_ENV = argv.mode;

  const jsLint = {
    enforce: 'pre',
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
  }

  const js = {
    test: /\.(jsx?)$/,
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

  const svg = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const gql = {
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader'
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
      rules: [js, html, svg, gql, jsLint],
    },
    resolve: {
      alias: {
        "@ui": path.resolve(__dirname, "src/components/UI"),
        "@containers": path.resolve(__dirname, "src/components/containers"),
        "~": path.resolve(__dirname, "src")
      },
      extensions: [".js", ".jsx", ".json"]
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
