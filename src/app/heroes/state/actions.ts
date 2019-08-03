import { Action } from '@ngrx/store';
import { Hero } from '../hero';

export enum HeroActionTypes {
  Load = '[Hero] Load',
  LoadSuccess = '[Hero] Load Success',
  LoadFail = '[Hero] Load Fail'
}

export class Load implements Action {
  readonly type = HeroActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = HeroActionTypes.LoadSuccess;

  constructor(public payload: Hero[]) { }
}

export class LoadFail implements Action {
  readonly type = HeroActionTypes.LoadFail;

  constructor(public payload: string) { }
}

export type HeroActions = Load
  | LoadSuccess
  | LoadFail;
