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
}
