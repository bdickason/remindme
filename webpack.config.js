var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['@babel/polyfill', './index.js'],
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  output:{
    publicPath:''
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
