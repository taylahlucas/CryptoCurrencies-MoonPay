const path = require('path');

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: [path.resolve(__dirname, './')],
          extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.js', '.jsx', '.json'],
          alias: {
            '@components': path.resolve(__dirname, 'mobile/components/'),
            '@redux': path.resolve(__dirname, 'mobile/redux/'),
            '@screens': path.resolve(__dirname, 'mobile/screens/'),
            '@styles': path.resolve(__dirname, 'mobile/styles/'),
            '@utils': path.resolve(__dirname, 'mobile/utils/')
          }
        }
      ]
    ]
  };
};
