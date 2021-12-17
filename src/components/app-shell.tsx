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
  dx_in: [/*-3, 0,*/ 3],
  dampener_in: [/*0.9,*/ 0.95 /*, 1, 1.05*/],
  t_in: [...Array(30).keys()],
};

//import('../../calculang/bounce.js').then((bounce) => {
function hotreload(bounce) {
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
      cartesianProduct(function_inputs_cp[fn]).map(({function$, ...d}) => ({
        ...d,
        function: fn,
        value: Math.round(function$(d)),
      }))
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
      data.map((d) => ({...d, hot: 999 /* code for latest */}))
    )
    .run();

  VEGA_DEBUG.view.resize().run(); // https://vega.github.io/vega-lite/docs/size.html#autosize
  // "Note that for performance reasons Vega-Lite doesn’t re-calculate layouts on every view change by default. If your view is cut off after the view updates, you can either set resize to true or manually call view.resize() through the Vega view API."
} //);

import('../../calculang/bounce.js').then((bounce) => {
  hotreload(bounce);
});

if (module.hot) {
  module.hot.accept('../../calculang/bounce.js', () => {
    const newbounce = require('../../calculang/bounce.js'); // can I keep my own cache of all versions? for interactions
    hot++;
    hotreload(newbounce);
  });
}

//import('../../calculang/bounce-introspection.json').then((introspection_info) => {});

// todo hot part from above changes

let hot = 0;

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

// testing commands:

// in my vega editor to capture data:
// copy(JSON.stringify(VEGA_DEBUG.view.data('source_0')));

// upload gist

// in official vega editor set data to gist, or empty value (source -> source_0 maybe)

// fetch('https://gist.githubusercontent.com/declann/b3136000e4458e7e8cc0241a218ab1b4/raw/cd6333148d9d67425cc7323b50b1b21c4a5c32bd/hot%2520data%2520from%2520bounce.cul.js%2520dev').then(d => d.json()).then(d => {VEGA_DEBUG.view.insert('source', d).run()})
