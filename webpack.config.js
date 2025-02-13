const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

let commitHash = 'hello'; //require('child_process').execSync('git rev-parse --short HEAD').toString();

module.exports = (env, argv) => {
  const config = {
    entry: {
      main: './src/index.tsx',
    },
    mode: 'development',

    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      pathinfo: false,
    },

    optimization: {
      concatenateModules: false,
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vega: {
            test: /vega/,
            name: 'vega',
            priority: 10,
            reuseExistingChunk: true,
          },
          vegaLite: {
            test: /vega-lite/,
            name: 'vega-lite',
            priority: 20,
            reuseExistingChunk: true,
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor',
            reuseExistingChunk: true,
          },
          default: {
            name: 'default',
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },

    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },

    devtool: argv.mode === 'development' ? 'cheap-module-source-map' : 'source-map',

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.mjs', '.json'],
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [require('autoprefixer')],
                },
              },
            },
          ],
        },
        {
          test: /\.ttf$/,
          type: 'asset/resource',
        },
      ],
    },

    plugins: [
      new webpack.DefinePlugin({
        __COMMIT_HASH__: JSON.stringify(commitHash),
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
      }),
      new MonacoWebpackPlugin({
        languages: ['json'],
      }),
      new CopyPlugin({
        patterns: [{from: require.resolve('elkjs/lib/elk-worker.js'), to: 'elk-worker.js'}],
      }),
    ],

    devServer: {
      // code sandbox use eg https://xxxxx-8080.sse.codesandbox.io/#/
      allowedHosts: ['.sse.codesandbox.io', 'codesandbox.io', '.github.io', '.ws-eu17.gitpod.io'],

      client: {
        overlay: true,
        webSocketURL: 'auto://0.0.0.0:0/ws',
        //logging: "verbose",

        /* webSocketURL: {
          hostname: '0.0.0.0',
          pathname: '/ws',
          password: 'dev-server', // is this bad?
          //port: 8081,
          protocol: 'ws',
          username: 'webpack',
        },*/
      },
      hot: true,
      devMiddleware: {
        //stats: 'errors-only',
      },
      //disableHostCheck: true, // insecure
      open: false,
      static: {
        directory: path.resolve(__dirname, 'public'),
        watch: true,
      },
    },
  };

  return config;
};
