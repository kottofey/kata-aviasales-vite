import { combineReducers } from '@reduxjs/toolkit';

import { isAllOn, allOnState, swapAllFilters } from '../helpers';
import {
  SIDE_FILTER_ALL,
  SIDE_FILTER_NO_STOPS,
  SIDE_FILTER_ONE_STOP,
  SIDE_FILTER_THREE_STOPS,
  SIDE_FILTER_TWO_STOPS,
  TOP_FILTER_CHEAPEST,
  TOP_FILTER_FASTEST,
  TOP_FILTER_OPTIMAL,
} from '../actions/filters';

export const top = (state = TOP_FILTER_CHEAPEST, action) => {
  switch (action.type) {
    case TOP_FILTER_CHEAPEST:
      return TOP_FILTER_CHEAPEST;
    case TOP_FILTER_FASTEST:
      return TOP_FILTER_FASTEST;
    case TOP_FILTER_OPTIMAL:
      return TOP_FILTER_OPTIMAL;
    default:
      return state;
  }
};

export const side = (
  state = {
    SIDE_FILTER_ALL: true,
    SIDE_FILTER_NO_STOPS: true,
    SIDE_FILTER_ONE_STOP: true,
    SIDE_FILTER_TWO_STOPS: true,
    SIDE_FILTER_THREE_STOPS: true,
  },
  action
) => {
  if (isAllOn(state, action)) return allOnState(state, action);

  const thisFilterState = {
    ...state,
    SIDE_FILTER_ALL: false,
    [action.type]: !state[action.type],
  };

  switch (action.type) {
    case SIDE_FILTER_ALL:
      return swapAllFilters(state);
    case SIDE_FILTER_NO_STOPS:
      return thisFilterState;
    case SIDE_FILTER_ONE_STOP:
      return thisFilterState;
    case SIDE_FILTER_TWO_STOPS:
      return thisFilterState;
    case SIDE_FILTER_THREE_STOPS:
      return thisFilterState;
    default:
      return state;
  }
};

export default combineReducers({
  top,
  side,
});
