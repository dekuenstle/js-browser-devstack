var webpack = require("webpack");
var path = require("path");

var webpackConfig = {
  context: __dirname,
  entry: './src/main.js',
  output: {
	path: path.join(__dirname, "dist"),
    publicPath: "/assets/",
    filename: "bundle.js",
	chunkFilename: "[hash]/js/[id].js",
	hotUpdateMainFilename: "[hash]/update.json",
	hotUpdateChunkFilename: "[hash]/js/[id].update.js",
    libraryTarget: 'umd'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './dist',
    port: 8080
  },
  recordsOutputPath: path.join(__dirname, "records.json"),
  module: {
	loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react'],
          env: {
            build: {
              optional: ["optimisation", "minification"]
            }
          }
        }
      },
	  { test: /\.json$/,   loader: "json-loader" },
	  { test: /\.coffee$/, loader: "coffee-loader" },
	  { test: /\.css$/,    loader: "style-loader!css-loader" },
	  { test: /\.less$/,   loader: "style-loader!css-loader!less-loader" },
	  { test: /\.jade$/,   loader: "jade-loader?self" },
	  { test: /\.png$/,    loader: "url-loader?prefix=img/&limit=5000" },
	  { test: /\.jpg$/,    loader: "url-loader?prefix=img/&limit=5000" },
	  { test: /\.gif$/,    loader: "url-loader?prefix=img/&limit=5000" },
	  { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000" },
	  { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
	  { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
	  { test: /\.svg$/,    loader: "file-loader?prefix=font/" }
	],
	preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: /node_modules/
      }
	]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    jquery: {amd: 'jquery', root: '$', commonjs: 'jquery', commonjs2: 'jquery'}
  },
    plugins: []
};

module.exports = webpackConfig;
