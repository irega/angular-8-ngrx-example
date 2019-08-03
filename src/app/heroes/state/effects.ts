import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as heroActions from './actions';
import { HeroService } from '../hero.service';

@Injectable()
export class HeroEffects {

  constructor(
    private heroService: HeroService,
    private actions$: Actions) { }

  @Effect()
  loadHeroes$: Observable<Action> = this.actions$.pipe(
    ofType(heroActions.HeroActionTypes.Load),
    mergeMap(action =>
      this.heroService.getHeroes().pipe(
        map(heroes => (new heroActions.LoadSuccess(heroes))),
        catchError(err => of(new heroActions.LoadFail(err)))
      )
    )
  );
}
