var path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./js/app.js', './js/zadanie01.js', './js/zadanie02.js', './js/zadanie04.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'out.js'
  }
};
