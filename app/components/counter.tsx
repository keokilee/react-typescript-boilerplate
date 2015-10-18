/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';

class CounterProps {
  public index: number;
  public value: number;
  public onIncrement: () => void;
  public onDecrement: () => void;
}

const COLORS = ['blue', 'green', 'red'];

export class Counter extends React.Component<CounterProps, any> {

  render() {
    const style = { color: COLORS[this.props.index % COLORS.length] }

    return (
      <div>
        <p style={style}>Counters {this.props.index + 1}: {this.props.value}</p>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
      </div>
    )
  }
}
