module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./'],
        extensions: ['.ios.ts', '.ios.tsx', '.ts', '.tsx', '.android.ts', '.android.tsx', '.json', '.svg'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@store': './src/store',
        }
      }],
    ]
  }
}
