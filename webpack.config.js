const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const production = env === 'production' || process.env.NODE_ENV === 'production';
  const devtool = production ? 'source-map' : 'eval-source-map';
  const dist = path.resolve(__dirname, 'dist');

  const extractSass = new ExtractTextPlugin({
    filename: '[name].[hash].css'
  });

  const plugins = [extractSass];

  if (!production) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new webpack.NoEmitOnErrorsPlugin());
  }

  plugins.push(new HtmlWebpackPlugin({
    title: 'Philipp Jardas – Agile Full-Stack Software Engineer',
    template: require('html-webpack-template'),
    inject: false,
    appMountId: 'app',
    mobile: true,
    baseHref: '/',
    minify: {
      collapseWhitespace: true,
    }
  }));

  const config = {
    entry: [
      'babel-polyfill',
      path.resolve(__dirname, 'src/index.js'),
    ],
    output: {
      path: dist,
      filename: 'main.[hash].js',
    },
    target: 'web',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool,
    devServer: {
      contentBase: dist,
      compress: true,
      port: 3000,
      historyApiFallback: true,
      hot: true,
    },
    module: {
      rules: [
        // FIXME make eslint work! { test: /\.jsx?$/, include: path.resolve(__dirname, 'src'), loader: 'eslint-loader', enforce: 'pre' },
        { test: /\.jsx?$/, include: path.resolve(__dirname, 'src'), loader: 'babel-loader', query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-runtime', 'transform-decorators-legacy']
        }},
        { test: /\.s?css$/, loader: extractSass.extract({ use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }], fallback: 'style-loader' })},
        { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
        { test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/, loader: 'url-loader' },
      ]
    },
    plugins,
  };

  return config;
};
