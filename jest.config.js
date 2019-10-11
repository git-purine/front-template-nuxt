module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.vue',
    '<rootDir>/src/pages/**/*.vue',
  ],
  moduleNameMapper: {
    '^@@/(.*)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['js', 'ts', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
};
