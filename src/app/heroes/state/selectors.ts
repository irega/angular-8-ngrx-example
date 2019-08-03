import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroState } from '.';

const getHeroFeatureState = createFeatureSelector<HeroState>('heroes');

export const getHeroes = createSelector(
  getHeroFeatureState,
  state => state.heroes
);
