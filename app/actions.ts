/// <reference path="../typings/tsd.d.ts" />
'use strict';

export enum ACTION { IncrementCounter, DecrementCounter, AddCounter }

export interface ICounterAction {
  type: ACTION;
  counterId?: number;
}

export function incrementCounter(counterId: number): ICounterAction {
  'use strict';
  return { type: ACTION.IncrementCounter, counterId };
}

export function decrementCounter(counterId: number): ICounterAction {
  'use strict';
  return { type: ACTION.DecrementCounter, counterId };
}

export function addCounter(): ICounterAction {
  'use strict';
  return { type: ACTION.AddCounter };
}
