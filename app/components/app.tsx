/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import { connect } from 'react-redux';

import { incrementCounter, decrementCounter } from '../actions';
import { Counter } from './counter';

function select(state) {
  return {
    counters: state.counters
  }
}

@connect(select)
export class App extends React.Component<any, any> {
  render() {
    const { dispatch, counters } = this.props;

    return (<ul>
      {counters.map((value, index) =>
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
