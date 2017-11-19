const path = require('path');
module.exports = {
  entry: './client/main.js',
  output: { path: path.join(__dirname, 'public', 'scripts'), filename: 'app.js' },
  module: {
    loaders: [
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
};