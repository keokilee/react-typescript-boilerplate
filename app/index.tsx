/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

class HelloProps {
  public name:string;
}

class Hello extends React.Component<HelloProps, any> {
  render() {
    return (<div>
      Hola {this.props.name}!
    </div>);
  }
}

ReactDOM.render(<Hello name="George" />, document.getElementById('app'));
