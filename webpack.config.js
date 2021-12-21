const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/start/initialization.js',
  },
  output: {
    path: path.resolve(__dirname, '__build__'),
    libraryTarget: 'commonjs',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  target: 'web',
  externals: /k6(\/.*)?/,
};
