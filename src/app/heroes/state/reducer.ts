import { HeroActions, HeroActionTypes } from './actions';
import { HeroState } from '.';

export const initialState: HeroState = { heroes: [] };

export function reducer(state = initialState, action: HeroActions): HeroState {

  switch (action.type) {
    case HeroActionTypes.LoadSuccess:
      return {
        ...state,
        heroes: action.payload,
      };

    case HeroActionTypes.LoadFail:
      return {
        ...state,
        heroes: []
      };

    default:
      return state;
  }
}
