const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = ({ config, mode }) => {

  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        },
      }
    ],
  });

  config.module.rules.push({
    test: /\.pug$/,
    loaders: require.resolve('pug-plain-loader'),
  });

  config.module.rules.push({
    test: /\.stylus?$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'stylus-loader',
    ]
  });

  config.module.rules.push({
    test: /\.stories\.ts?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  })

  config.resolve.alias['@@'] = path.resolve(__dirname, '../');
  config.resolve.alias['@'] = path.resolve(__dirname, '../src/');

  config.resolve.extensions.push('.styl', '.ts');

  config.plugins.push(new ForkTsCheckerWebpackPlugin());

  console.log();

  return config;
};
