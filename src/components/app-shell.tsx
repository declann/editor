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

let hot = 0;
import('../../calculang/run-bounce.json' /* hardcode, replace by some config lookup */).then((data) => {
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
