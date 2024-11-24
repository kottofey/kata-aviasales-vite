import {
  SIDE_FILTER_NO_STOPS,
  SIDE_FILTER_ONE_STOP,
  SIDE_FILTER_THREE_STOPS,
  SIDE_FILTER_TWO_STOPS,
} from './actions/filters';

export const isAllOn = (state, action) =>
  !state[action.type] &&
  (action.type === SIDE_FILTER_NO_STOPS ||
    state.SIDE_FILTER_NO_STOPS) &&
  (action.type === SIDE_FILTER_ONE_STOP ||
    state.SIDE_FILTER_ONE_STOP) &&
  (action.type === SIDE_FILTER_TWO_STOPS ||
    state.SIDE_FILTER_TWO_STOPS) &&
  (action.type === SIDE_FILTER_THREE_STOPS ||
    state.SIDE_FILTER_THREE_STOPS);

const oneOfSides = (action) =>
  action.type === SIDE_FILTER_NO_STOPS ||
  action.type === SIDE_FILTER_ONE_STOP ||
  action.type === SIDE_FILTER_TWO_STOPS ||
  action.type === SIDE_FILTER_THREE_STOPS;

export const allOnState = (state, action) => {
  if (oneOfSides(action))
    return {
      ...state,
      SIDE_FILTER_ALL: true,
      [action.type]: true,
    };

  return state;
};

export const swapAllFilters = (state) => ({
  SIDE_FILTER_ALL: !state.SIDE_FILTER_ALL,
  SIDE_FILTER_NO_STOPS: !state.SIDE_FILTER_ALL,
  SIDE_FILTER_ONE_STOP: !state.SIDE_FILTER_ALL,
  SIDE_FILTER_TWO_STOPS: !state.SIDE_FILTER_ALL,
  SIDE_FILTER_THREE_STOPS: !state.SIDE_FILTER_ALL,
});
