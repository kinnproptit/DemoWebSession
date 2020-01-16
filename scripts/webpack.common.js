const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    filename: '[name].[hash].bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'raw-loader'
          }
        ]
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx|mjs)$/,
          /\.css$/,
          /\.json$/,
          /\.svg$/,
          /\.(graphql|gql)$/,
          /particles\.js/
        ],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  mode: 'development',
  resolve: {
    alias: {
      ui: path.resolve(process.cwd(), 'src', 'packages', 'ui'),
      core: path.resolve(process.cwd(), 'src', 'packages', 'core'),
      service: path.resolve(process.cwd(), 'src', 'packages', 'service')
    },
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.js', '.json', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'public', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '../dist/style.min.css'
    })
  ],
  devServer: {
    compress: true,
    clientLogLevel: 'none',
    contentBase: './public',
    overlay: true,
    hot: false,
    port: 8123,
    quiet: true,
    host: 'localhost',
    disableHostCheck: true,
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }
}
