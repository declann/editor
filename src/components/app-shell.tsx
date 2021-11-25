import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

import App from './app';
import Reset from './reset';

import dn from './dn';

export default class AppShell extends React.PureComponent {
  public render() {
    console.log(dn);
    console.log(window.VEGA_DEBUG);
    return (
      <div>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/reset" component={() => <Reset />} />
          <Route path="/edited" component={App} />
          <Route exact path="/gist/:id/:filename" component={App} />
          <Route exact path="/gist/:id/:filename/view" component={App} />
          <Route path="/gist/:id/:revision/:filename" component={App} />
          <Route path="/examples/:mode/:example_name" component={App} />
          <Route path="/examples/:mode" component={() => <App showExample={true} />} />
          <Route path="/examples" component={() => <App showExample={true} />} />
          <Route path="/custom/:mode" component={App} />
          <Route path="/url/:mode/:compressed" component={App} />
        </Switch>
      </div>
    );
  }
}

//window.VEGA_DEBUG.view.insert('source_0', require('./dn').default).run();

import('./dn2').then((dn2) => {
  console.log(dn2);
});

/////// calculang stuff //////

var domains = {
  //functions: ['x','dx','y','dy','compressed'], now determined from introspection_info
  dx_in: [-3, 0, 3],
  dampener_in: [0.9, 0.95, 1, 1.05],
  t_in: [...Array(30).keys()],
};

import('../../calculang/bounce.js').then((bounce) => {
  console.log('HELLO');
  var introspection_info = require('../../calculang/bounce-introspection.json'); // todo fix

  var functions = Object.values(introspection_info.cul_functions)
    .filter((d) => d.cul_scope_id == 0 && d.reason != 'input definition' && d.name[d.name.length - 1] != '_')
    .filter(
      (e) =>
        e.inputs.reduce((a, v) => {
          return a + (domains[v] == undefined ? 1 : 0);
        }, 0) == 0
    ) // exclude where some input doesn't have a domain
    .filter((d) => d.inputs[0] != d.name + '_in')
    .map((d) => d.name);

  var function_inputs = {};
  functions.forEach((d) => {
    function_inputs[d] = Object.values(introspection_info.cul_functions).filter((e) => e.name == d)[0].inputs;
  });

  var function_inputs_cp = {};
  functions.forEach((d) => {
    function_inputs_cp[d] = [];
    function_inputs[d].forEach((e) => {
      var o = {};
      //if (domains[e] != undefined) o[e] = domains[e];
      o[e] = domains[e];
      function_inputs_cp[d].push(o);
    });
    function_inputs_cp[d].push({function$: [bounce[d]]});
  });

  console.log(functions);
  console.log(function_inputs_cp);

  //debugger;
  var data = [].concat.apply(
    [],
    functions.map((fn) =>
      cartesianProduct(function_inputs_cp[fn]).map(({function$, ...d}) => ({...d, function: fn, value: function$(d)}))
    )
  ); //.reduce([], (acc, val) => acc.concat(val))

  console.log(data);

  window.VEGA_DEBUG.view
    .insert(
      'source_0',
      data.map((d) => ({...d, hot}))
    )
    .run();

  window.VEGA_DEBUG.view
    .insert(
      'source_0',
      data.map((d) => ({...d, hot: 999 /* code for latest */}))
    )
    .run();
});

//import('../../calculang/bounce-introspection.json').then((introspection_info) => {});

// todo hot part from above changes

let hot = 0;
import('../../calculang/run-bounce.json' /* hardcode, replace by some config lookup */).then((data) => {
  return;
  //return;
  console.log(data);

  // this doesn't seem to work, timing?
  window.VEGA_DEBUG.view
    .insert(
      'source_0',
      data.default.map((d) => ({...d, hot}))
    )
    .run();

  window.VEGA_DEBUG.view
    .insert(
      'source_0',
      data.default.map((d) => ({...d, hot: 999 /* code for latest */}))
    )
    .run();
});

if (module.hot) {
  module.hot.accept('../../calculang/run-bounce.json', () => {
    console.log('hot dn2!!!');
    console.log(require('../../calculang/run-bounce.json'));

    const updated = require('../../calculang/run-bounce.json'); // already parsed

    hot++;
    console.log('HOT!' + require('./dn').default);

    //window.VEGA_DEBUG.view.insert('table', [{category: 'declan', amount: 100, hot}]).run();
    window.VEGA_DEBUG.view
      .insert(
        'source_0',
        updated.map((d) => ({...d, hot}))
      )
      .run();

    // old code
    window.VEGA_DEBUG.view
      .change(
        'source_0',
        window.VEGA_DEBUG.view.changeset().remove(function (d) {
          return d.hot == 999;
        })
      )
      .run();

    window.VEGA_DEBUG.view
      .insert(
        'source_0',
        updated.map((d) => ({...d, hot: 999 /* code for latest */}))
      )
      .run();

    // should keep a memory and do -prevHot? so that hot-prevHot is simple, recs in vega-editor/app, etc.
  });
}

/////// calculang stuff over //////

//import('./dn').then(() => {
if (module.hot) {
  module.hot.accept('./dn2', () => {
    console.log('hot dn2!!!');
  });

  module.hot.accept('./dn', () => {
    hot++;
    console.log('HOT!' + require('./dn').default);

    //window.VEGA_DEBUG.view.insert('table', [{category: 'declan', amount: 100, hot}]).run();
    window.VEGA_DEBUG.view
      .insert(
        'source_0',
        require('./dn').default.map((d) => ({...d, hot}))
      )
      .run();

    // old code
    window.VEGA_DEBUG.view
      .change(
        'source_0',
        window.VEGA_DEBUG.view.changeset().remove(function (d) {
          return d.hot == 999;
        })
      )
      .run();

    window.VEGA_DEBUG.view
      .insert(
        'source_0',
        require('./dn').default.map((d) => ({...d, hot: 999 /* code for latest */}))
      )
      .run();

    // should keep a memory and do -prevHot? so that hot-prevHot is simple, recs in vega-editor/app, etc.
  });
}
//});

// https://stackoverflow.com/questions/18957972/cartesian-product-of-objects-in-javascript
function cartesianProduct(input, current) {
  if (!input || !input.length) {
    return [];
  }

  var head = input[0];
  var tail = input.slice(1);
  var output = [];

  for (var key in head) {
    for (var i = 0; i < head[key].length; i++) {
      var newCurrent = copy(current);
      newCurrent[key] = head[key][i];
      if (tail.length) {
        var productOfTail = cartesianProduct(tail, newCurrent);
        output = output.concat(productOfTail);
      } else output.push(newCurrent);
    }
  }
  return output;
}

function copy(obj) {
  var res = {};
  for (var p in obj) res[p] = obj[p];
  return res;
}
