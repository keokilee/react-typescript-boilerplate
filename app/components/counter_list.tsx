/// <reference path="../../typings/tsd.d.ts" />
'use strict';

import * as React from 'react';

import { Counter } from './counter';

interface ICounterListProps {
  counters: number[];
  increment: (index: number) => void;
  decrement: (index: number) => void;
}

export class CounterList extends React.Component<ICounterListProps, {}> {
  public render(): React.ReactElement<{}> {
    'use strict';

    return (<ul>
      {this.props.counters.map((value: number, index: number) =>
        <li key={index}>
          <Counter
            index={index}
            onIncrement={() => this.props.increment(index)}
            onDecrement={() => this.props.decrement(index)}
            value={this.props.counters[index]}
          />
        </li>
      )}
    </ul>);
  }
}
