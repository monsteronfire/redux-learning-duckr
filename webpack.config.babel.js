import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',

});

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist')
};

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  entry: [
    PATHS.app,
  ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(js)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: [ 'style-loader!css-loader' ] }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};
