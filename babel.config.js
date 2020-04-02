module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        root: __dirname,
        rootPathPrefix: '~/',
        rootPathSuffix: './src/',
      },
    ],
  ],
}
