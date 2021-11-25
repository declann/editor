var bounce = require('./bounce.js');

const t_end = 20;
const dampener_in = 0.96;
const dx_in = 3;

function projection() {
  let projection_prime = [];
  [...Array(t_end).keys()].forEach((t_in) => {
    projection_prime.push({t_in, dx_in, dampener_in, function: 'x', value: Math.round(bounce.x({t_in, dx_in}))});

    // I need to work off... introspection info, but how should I read it in?
    // doing this first in Observable (model-explorer-wip)...
    // done & republished

    // this code isn't following model-explorer-wip... so TODO move it to do so
    // but first introspection...

    projection_prime.push({
      t_in,
      dx_in /* keep? */,
      dampener_in,
      function: 'y',
      value: Math.round(bounce.y({t_in, dampener_in})),
    });
    projection_prime.push({
      t_in,
      dx_in,
      dampener_in,
      function: 'dy',
      value: Math.round(bounce.dy({t_in, dampener_in})),
    });
    projection_prime.push({
      t_in,
      dx_in,
      dampener_in,
      function: 'compressed',
      value: bounce.compressed({t_in, dampener_in}) ? 1 : 0,
    });
  });
  return projection_prime;
}

console.log(JSON.stringify(projection()));
