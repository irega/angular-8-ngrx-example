import { CounterActions, CounterActionTypes } from './actions';
import { CounterState } from '.';

export const initialState: CounterState = { value: 0 };

export function reducer(state = initialState, action: CounterActions): CounterState {

  switch (action.type) {
    case CounterActionTypes.Increment:
      return {
        ...state,
        value: state.value + 1
      };

    case CounterActionTypes.Decrement:
      return {
        ...state,
        value: state.value - 1
      };

    case CounterActionTypes.Reset:
      return {
        ...state,
        value: 0
      };

    default:
      return state;
  }
}
