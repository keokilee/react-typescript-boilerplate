/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';

interface ICounterProps {
  index: number;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const COLORS: string[] = ['blue', 'green', 'red', 'orange'];

export class Counter extends React.Component<ICounterProps, {}> {
  public render(): React.ReactElement<{}> {
    const style: {} = {
      color: COLORS[this.props.index % COLORS.length]
    };

    return (
      <div>
        <p style={style}>Counters {this.props.index + 1}: {this.props.value}</p>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
      </div>
    );
  }
}
