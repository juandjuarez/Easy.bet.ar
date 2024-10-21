const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  resolve: {
    fallback: {
      zlib: require.resolve('browserify-zlib'),
      crypto: require.resolve('crypto-browserify'),
      querystring: require.resolve('querystring-es3'),
      stream: require.resolve('stream-browserify'),
      string_decoder: require.resolve('string_decoder/'),
      url: require.resolve('url/'),
      buffer: require.resolve('buffer/'),
      util: require.resolve('util/'),
      http: require.resolve('stream-http'),
      https: require.resolve('stream-http'),
      fs: false, // false si no necesitas fs
      net: false, // false si no necesitas net
    },
  },
};
