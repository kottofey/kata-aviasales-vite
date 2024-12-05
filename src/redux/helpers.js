import {
  SIDE_FILTER_NO_STOPS,
  SIDE_FILTER_ONE_STOP,
  SIDE_FILTER_THREE_STOPS,
  SIDE_FILTER_TWO_STOPS,
  TOP_FILTER_FASTEST,
  TOP_FILTER_OPTIMAL,
  TOP_FILTER_CHEAPEST,
} from './actions/filtersAction';

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

export const priceSorting = (type, a, b) => {
  switch (type) {
    case TOP_FILTER_CHEAPEST:
      return a.price - b.price;
    case TOP_FILTER_FASTEST:
      return a.segments[0].duration - b.segments[0].duration;
    case TOP_FILTER_OPTIMAL:
      return (
        a.segments[0].duration -
        b.segments[0].duration +
        a.price -
        b.price
      );
    default:
      return 0;
  }
};

export const stopsSorting = (side, ticket) => {
  return (
    (side.SIDE_FILTER_NO_STOPS &&
      ticket.segments[0].stops.length === 0) ||
    (side.SIDE_FILTER_ONE_STOP &&
      ticket.segments[0].stops.length === 1) ||
    (side.SIDE_FILTER_TWO_STOPS &&
      ticket.segments[0].stops.length === 2) ||
    (side.SIDE_FILTER_THREE_STOPS &&
      ticket.segments[0].stops.length === 3)
  );
};
