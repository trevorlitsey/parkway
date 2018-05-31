const path = require("path");

module.exports = {
  entry: {
    index: "./index.html",
    booking: "./booking/index.html",
    news: "./news/index.html",
    newsletter: "./newsletter/index.html",
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":data-src"],
          },
        },
      },
    ],
  },
};
