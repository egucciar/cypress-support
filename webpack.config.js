// was using "No Config" webpack 4 setup
// but this makes it easier to change how things work

module.exports = {
    entry: './src/index.js',
    module: {
      rules: [
        // {
        //   test: /\.(js|jsx)$/,
        //   exclude: /node_modules/,
        //   use: ['babel-loader']
        // }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: '.',
      historyApiFallback: true
    }
  };