import {
  SIDE_FILTER_ALL,
  SIDE_FILTER_NO_STOPS,
  SIDE_FILTER_ONE_STOP,
  SIDE_FILTER_THREE_STOPS,
  SIDE_FILTER_TWO_STOPS,
  TOP_FILTER_CHEAPEST,
  TOP_FILTER_FASTEST,
  TOP_FILTER_OPTIMAL,
} from '../actions';

export const topFilterReducer = (
  state = TOP_FILTER_CHEAPEST,
  action
) => {
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

export const sideFilterReducer = (
  state = {
    SIDE_FILTER_ALL: true,
    SIDE_FILTER_NO_STOPS: true,
    SIDE_FILTER_ONE_STOP: true,
    SIDE_FILTER_TWO_STOPS: true,
    SIDE_FILTER_THREE_STOPS: true,
  },
  action
) => {
  switch (action.type) {
    case SIDE_FILTER_ALL:
      return {
        SIDE_FILTER_ALL: !state.SIDE_FILTER_ALL,
        SIDE_FILTER_NO_STOPS: !state.SIDE_FILTER_ALL,
        SIDE_FILTER_ONE_STOP: !state.SIDE_FILTER_ALL,
        SIDE_FILTER_TWO_STOPS: !state.SIDE_FILTER_ALL,
        SIDE_FILTER_THREE_STOPS: !state.SIDE_FILTER_ALL,
      };
    case SIDE_FILTER_NO_STOPS:
      if (
        !state.SIDE_FILTER_NO_STOPS &&
        state.SIDE_FILTER_ONE_STOP &&
        state.SIDE_FILTER_TWO_STOPS &&
        state.SIDE_FILTER_THREE_STOPS
      )
        return {
          ...state,
          SIDE_FILTER_ALL: true,
          SIDE_FILTER_NO_STOPS: true,
        };

      return {
        ...state,
        SIDE_FILTER_ALL: false,
        SIDE_FILTER_NO_STOPS: !state.SIDE_FILTER_NO_STOPS,
      };
    case SIDE_FILTER_ONE_STOP:
      if (
        !state.SIDE_FILTER_ONE_STOP &&
        state.SIDE_FILTER_NO_STOPS &&
        state.SIDE_FILTER_TWO_STOPS &&
        state.SIDE_FILTER_THREE_STOPS
      )
        return {
          ...state,
          SIDE_FILTER_ALL: true,
          SIDE_FILTER_ONE_STOP: true,
        };
      return {
        ...state,
        SIDE_FILTER_ALL: false,
        SIDE_FILTER_ONE_STOP: !state.SIDE_FILTER_ONE_STOP,
      };
    case SIDE_FILTER_TWO_STOPS:
      if (
        !state.SIDE_FILTER_TWO_STOPS &&
        state.SIDE_FILTER_NO_STOPS &&
        state.SIDE_FILTER_ONE_STOP &&
        state.SIDE_FILTER_THREE_STOPS
      )
        return {
          ...state,
          SIDE_FILTER_ALL: true,
          SIDE_FILTER_TWO_STOPS: true,
        };
      return {
        ...state,
        SIDE_FILTER_ALL: false,
        SIDE_FILTER_TWO_STOPS: !state.SIDE_FILTER_TWO_STOPS,
      };
    case SIDE_FILTER_THREE_STOPS:
      if (
        !state.SIDE_FILTER_THREE_STOPS &&
        state.SIDE_FILTER_NO_STOPS &&
        state.SIDE_FILTER_ONE_STOP &&
        state.SIDE_FILTER_TWO_STOPS
      )
        return {
          ...state,
          SIDE_FILTER_ALL: true,
          SIDE_FILTER_THREE_STOPS: true,
        };
      return {
        ...state,
        SIDE_FILTER_ALL: false,
        SIDE_FILTER_THREE_STOPS: !state.SIDE_FILTER_THREE_STOPS,
      };
    default:
      return state;
  }
};
