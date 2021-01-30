module.exports = {
    module: {
    // entry: './app/components/index.js',
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react']
          }
        }
      ]
    }
  };