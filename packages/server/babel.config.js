module.exports = {
  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-env', {
      targets: {
        node: '16.14',
      },
      loose: true,
    }],
  ],
  compact: true,
  plugins: [
    ['@babel/plugin-proposal-decorators', {
      version: 'legacy',
    }],
    ['@babel/plugin-proposal-class-properties', {
      loose: true,
    }],
    'babel-plugin-transform-typescript-metadata',
    ['babel-plugin-parameter-decorator', {
      legacy: true,
    }],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-optional-chaining',
  ],
}
