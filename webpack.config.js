var path = require('path');
var webpack = require('webpack');
//var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  // entry point of our application
  entry: "./src/index.js",
  // where to place the compiled bundle
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js',
    publicPath: '/static/build/'
  },
  module: {
    loaders: [
      {
        // use vue-loader for *.vue files
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        // use babel-loader for *.js files
        test: /\.js$/,
        loader: 'babel',
        // important: exclude files in node_modules
        // otherwise it's going to be really slow!
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.(jpg|png|ttf|woff|svg|woff2|eot)$/,
        loader: "file"
      }
    ]
  },
  // if you are using babel-loader directly then
  // the babel config block becomes required.
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
    //new HtmlWebpackPlugin({
    //  path: 'build',
    //  title: 'Codestairs',
    //  favicon: 'assets/favicon.ico'
    //})
  ],
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  }
};


if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ];
}
else {
  module.exports.devtool = '#source-map'
}