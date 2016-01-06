var path = require('path');
var webpack = require('webpack');

module.exports = {
  // entry point of our application
  entry: "./src/index.js",
  // where to place the compiled bundle
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
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
        test: /\.(jpg|png)$/,
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
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  }
}