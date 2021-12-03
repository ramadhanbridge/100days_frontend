const path = require('path');

module.exports = {
 mode:"development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: 'index.js',
  },
  watch:true
};