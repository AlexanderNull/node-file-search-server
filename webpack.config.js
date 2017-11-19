const path = require('path');
module.exports = {
  entry: './client/main.js',
  output: { path: path.join(__dirname, 'public', 'scripts'), filename: 'app.js' },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
    devtool: 'source-map',
    resolve: {
        extensions: ['.jsx', '.js', '.ts', '.tsx', '.json'],
    },
};