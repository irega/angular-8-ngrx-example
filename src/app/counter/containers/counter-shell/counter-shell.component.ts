import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../../state';
import * as counterActions from './../../state/actions';
import * as counterSelectors from './../../state/selectors';

@Component({
  selector: 'app-counter-shell',
  templateUrl: './counter-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterShellComponent {
  count$: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.count$ = store.pipe(select(counterSelectors.getCounterValue));
  }

  incrementCounter() {
    this.store.dispatch(new counterActions.Increment());
  }

  decrementCounter() {
    this.store.dispatch(new counterActions.Decrement());
  }

  resetCounter() {
    this.store.dispatch(new counterActions.Reset());
  }
}
