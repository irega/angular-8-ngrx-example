import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  Increment = '[Counter] Increment',
  Decrement = '[Counter] Decrement',
  Reset = '[Counter] Reset',
}

export class Increment implements Action {
  readonly type = CounterActionTypes.Increment;

  constructor(public payload: void) { }
}

export class Decrement implements Action {
  readonly type = CounterActionTypes.Decrement;

  constructor(public payload: void) { }
}

export class Reset implements Action {
  readonly type = CounterActionTypes.Reset;

  constructor(public payload: void) { }
}

export type CounterActions = Increment
  | Decrement
  | Reset;
