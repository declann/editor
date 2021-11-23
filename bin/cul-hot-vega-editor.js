#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

const {program} = require('commander');

program
  .version(require('../package.json').version)
  .command('launch <calcuconfig.json>')
  .description('launch models based on calcuconfig.json')
  .action((calcuconfig, options) => {
    console.log(calcuconfig);
    // TODO log the contents, define the config, see about running vega-editor, feed in the config
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
