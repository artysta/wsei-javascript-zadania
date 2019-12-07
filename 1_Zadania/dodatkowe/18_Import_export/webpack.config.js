var path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./js/app.js', './js/polygon.js', './js/square.js'],
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'out.js'
  }
};
