/// <reference path="../typings/tsd.d.ts" />
'use strict';

export const INCREMENT_COUNTER: string = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER: string = 'DECREMENT_COUNTER';

export class CounterAction {
  public type: string;
  public counterId: number;
}

export function incrementCounter(counterId: number): CounterAction {
  'use strict';
  return { type: INCREMENT_COUNTER, counterId };
}

export function decrementCounter(counterId: number): CounterAction {
  'use strict';
  return { type: DECREMENT_COUNTER, counterId };
}
