import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const pages = [
  new HtmlWebpackPlugin({
    title: 'grid test',
    template: 'views/index.pug',
    filename: 'index.html',
    inject: false,
  }),
];

const config = {
  context: path.join(__dirname, 'src/'),
  entry: {
    app: path.join(__dirname, 'src', 'javascripts', 'entry.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    // athre plugins
  ].concat(pages),
  devServer: {
    contentBase: 'dist/',
    port: 3100,
    open: true,
  },
};

const sassConfig = {
  module: {
    loaders: [{
      test: /\.sass$/,
      include: path.join(__dirname, 'src', 'stylesheets'),
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader?url=false!postcss-loader!sass-loader',
      })
    }],
  },
  entry: {
    entry: './src/stylesheets/entry.sass',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.css',
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
  ],
};

export default [config, sassConfig];
