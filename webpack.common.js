const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  plugins:[
    new HtmlWebpackPlugin({
      template:"./src/template.html"
    })
  ],
  module:{
    rules:[
      {
        test:/\.css$/i,
        use:["style-loader", "css-loader"]
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      }
    ]
  }
};