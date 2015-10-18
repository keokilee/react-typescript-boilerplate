/// <reference path="../typings/tsd.d.ts" />

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export class CounterAction {
  public type: string
  public counterId: number
}

export function incrementCounter(counterId) {
  return { type: INCREMENT_COUNTER, counterId };
}

export function decrementCounter(counterId) {
  return { type: DECREMENT_COUNTER, counterId };
}
