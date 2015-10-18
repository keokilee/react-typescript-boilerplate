/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { App } from './components/app';
import { counterApp } from './reducers';

const store = createStore(counterApp);

class Hello extends React.Component<any, any> {
  render() {
    return (<Provider store={store}>
      <App />
    </Provider>);
  }
}

ReactDOM.render(<Hello name="George" />, document.getElementById('app'));
