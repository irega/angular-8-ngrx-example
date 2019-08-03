import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from '.';

const getCounterFeatureState = createFeatureSelector<CounterState>('counter');

export const getCounterValue = createSelector(
  getCounterFeatureState,
  state => state.value
);
