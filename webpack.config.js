const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts', // Webpack entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Ensure all assets go inside dist/
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into a separate file
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans dist/ before every build
    new HtmlWebpackPlugin({
      template: './src/index.html', // Ensure index.html is copied to dist/
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css' // Ensures styles.css is created
    }),
    new HtmlWebpackPlugin({
      template:  './src/index.liquid',
      filename: 'index.liquid'
  })
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Serve files from dist/
    port: 3000,
    open: true
  }
};
