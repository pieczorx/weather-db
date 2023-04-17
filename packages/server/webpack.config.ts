import NodeHotLoaderWebpackPlugin from 'node-hot-loader/NodeHotLoaderWebpackPlugin'
import {resolve} from 'path'
import {Configuration} from 'webpack'
import nodeExternals from 'webpack-node-externals'

export default function webpackConfigFactory() {
  const isDev = process.env.NODE_ENV !== 'production'
  const plugins = []
  if(isDev) {
    plugins.push(new NodeHotLoaderWebpackPlugin({
      autoRestart: true,
    }))
  }
  return {
    entry: resolve('./src/launch/launch.ts'),
    mode: isDev ? 'development' : 'production',
    target: 'node',
    externalsPresets: {
      node: true,
    },
    plugins,
    resolve: {
      extensions: ['.ts', '.js', '.json'],
    },
    optimization: {
      emitOnErrors: true,
    },
    devtool: 'source-map',
    externals: [nodeExternals({
      additionalModuleDirs: [
        resolve(__dirname, '../../node_modules'),
      ],
    })],
    module: {
      parser: {
        javascript: {
          exportsPresence: false,
        },
      },
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    node: {
      __dirname: true,
    },
    context: __dirname,
    output: {
      path: resolve('./.dist'),
      publicPath: '/',
      filename: '[name].js',
    },
  } as Configuration
}
