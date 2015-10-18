/// <reference path="../typings/tsd.d.ts" />
'use strict';

export enum ACTION { IncrementCounter, DecrementCounter }

export class CounterAction {
  public type: ACTION;
  public counterId: number;
}

export function incrementCounter(counterId: number): CounterAction {
  'use strict';
  return { type: ACTION.IncrementCounter, counterId };
}

export function decrementCounter(counterId: number): CounterAction {
  'use strict';
  return { type: ACTION.DecrementCounter, counterId };
}
