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
        include: path.resolve(__dirname, 'src', 'server')
      }
    ]
  },
  resolve: {
    extensions: ['.ts'],
    symlinks: false
  },
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
        include: path.resolve(__dirname, 'src', 'browser')
      }
    ]
  },
  resolve: {
    extensions: ['.ts'],
    symlinks: false
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public', 'js')
  }
};

module.exports = [server, browser];
