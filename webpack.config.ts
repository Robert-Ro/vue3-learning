import { Configuration, HotModuleReplacementPlugin } from 'webpack'
import { resolve, join } from 'path'
import {} from 'fs'
import { VueLoaderPlugin } from 'vue-loader'
import htmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import ip from 'ip'
import chalk from 'chalk'

const ipAddress = ip.address()

const config: Configuration & WebpackDevServerConfiguration = {
  entry: resolve(__dirname, 'src/main.ts'),
  output: {
    filename: 'bundle.js',
    clean: true,
    path: resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
      {
        test: /\.tsx$/,
        loader: 'babel-loader',
        // use:['babel-loader', 'ts-loader'],
        // options: { appendTsxSuffixTo: [/TSX\.vue$/] },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.vue', '.js'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      title: 'Webpack-Typescript-Vue',
      template: resolve(__dirname, './public/index.html'),
    }),
  ],
  stats: 'errors-only',
  devServer: {
    contentBase: join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    host: ipAddress,
    clientLogLevel: 'error',
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    onListening: (server) => {
      const { port } = server.listeningApp.address()
      console.log('Listening on port:', chalk.blue(`http://${ipAddress}:${port}`))
    },
    proxy: {},
    stats: 'errors-only',
    writeToDisk: true,
  },
}

export default config
