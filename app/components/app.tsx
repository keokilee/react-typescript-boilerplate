/// <reference path="../../typings/tsd.d.ts" />
'use strict';

import * as React from 'react';
import { connect } from 'react-redux';

import { incrementCounter, decrementCounter } from '../actions';
import { Counter } from './counter';

function select(state: any): any {
  'use strict';
  return {
    counters: state.counters
  };
}

@connect(select)
export class App extends React.Component<any, any> {
  public render(): React.ReactElement<any> {
    'use strict';
    const { dispatch, counters }: any = this.props;

    return (<ul>
      {counters.map((value: number, index: number) =>
        <li key={index}>
          <Counter
            index={index}
            onIncrement={() => dispatch(incrementCounter(index))}
            onDecrement={() => dispatch(decrementCounter(index))}
            value={counters[index]}
          />
        </li>
      )}
    </ul>);
  }
}
