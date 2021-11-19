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

let hot = 0;
if (module.hot) {
  module.hot.accept('./dn', () => {
    hot++;
    console.log('HOT!' + require('./dn').default);

    //window.VEGA_DEBUG.view.insert('table', [{category: 'declan', amount: 100, hot}]).run();
    window.VEGA_DEBUG.view.insert('source_0', [{a: 'K', b: 100, hot}]).run();
  });
}
