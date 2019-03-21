const path = require('path');
const nodeExternals = require('webpack-node-externals');

const server = {
  entry: './src/server/main.ts',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: { configFile: 'tsconfig.server.json' }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: { extensions: ['.ts', '.js'] },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};

const browser = {
  entry: './src/browser/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: { configFile: 'tsconfig.browser.json' }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: { extensions: ['.ts', '.js'] },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public', 'js')
  }
};

module.exports = [server, browser];
