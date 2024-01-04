module.exports = {
  preset: 'jest-expo',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    "^.+\\.js$": "babel-jest"
  },  
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native)/).*/',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
