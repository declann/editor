#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

const {program} = require('commander');

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config.js')(undefined, {mode: 'development'}); // needs to be hardcoded

// https://webpack.js.org/api/webpack-dev-server/
const compiler = Webpack(webpackConfig);
const devServerOptions = {...webpackConfig.devServer, open: true};
const server = new WebpackDevServer(devServerOptions, compiler);

/*const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};*/

program
  .version(require('../package.json').version)
  .command('launch <calcuconfig.json>')
  .description('launch models based on calcuconfig.json')
  .action((calcuconfig, options) => {
    const hotdata = JSON.parse(fs.readFileSync(calcuconfig).toString()).hotdata; // todo model
    //console.log(calcuconfig);
    console.log(hotdata);

    //runServer();
    server.startCallback(() => {
      console.log('DN Successfully started server on http://localhost:8080');
    });

    // TODO feed in the calcuconfig, then back to thinking about models perspective vs data
    // TODO check running in a separate repo
    /*
    compiler(entrypoint, options)
      .then((d) => {
        fs.writeFileSync(path.dirname(entrypoint) + path.sep + path.basename(entrypoint, '.cul.js') + '.js', d.bundle); // is this portable?
        fs.writeFileSync(
          path.dirname(entrypoint) + path.sep + path.basename(entrypoint, '.cul.js') + '.js.map',
          d.sourcemap
        ); // is this portable?
      })
      .catch((err) => {
        console.log(err);
      });*/
  });

program.parse(process.argv);

// move to async? https://github.com/tj/commander.js/#action-handler
