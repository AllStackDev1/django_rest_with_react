// const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ],
        // use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ],
  },
};
