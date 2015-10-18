/// <reference path="../typings/tsd.d.ts" />

import { combineReducers } from 'redux';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actions';

function counters(state = [0, 0, 0], action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return [
        ...state.slice(0, action.counterId),
        state[action.counterId] + 2,
        ...state.slice(action.counterId + 1)
      ];
    case DECREMENT_COUNTER:
      return [
        ...state.slice(0, action.counterId),
        state[action.counterId] - 2,
        ...state.slice(action.counterId + 1)
      ];
    default:
      return state;
  }
}

export const counterApp = combineReducers({ counters });
