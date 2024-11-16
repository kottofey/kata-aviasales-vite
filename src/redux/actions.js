export const SIDE_FILTER_ALL = 'SIDE_FILTER_ALL';
export const SIDE_FILTER_NO_STOPS = 'SIDE_FILTER_NO_STOPS';
export const SIDE_FILTER_ONE_STOP = 'SIDE_FILTER_ONE_STOP';
export const SIDE_FILTER_TWO_STOPS = 'SIDE_FILTER_TWO_STOPS';
export const SIDE_FILTER_THREE_STOPS = 'SIDE_FILTER_THREE_STOPS';

export const TOP_FILTER_CHEAPEST = 'TOP_FILTER_CHEAPEST';
export const TOP_FILTER_FASTEST = 'TOP_FILTER_FASTEST';
export const TOP_FILTER_OPTIMAL = 'TOP_FILTER_OPTIMAL';

export const sideFilterAll = () => ({
  type: SIDE_FILTER_ALL,
});

export const sideFilterNoStops = () => ({
  type: SIDE_FILTER_NO_STOPS,
});

export const sideFilterOneStop = () => ({
  type: SIDE_FILTER_ONE_STOP,
});

export const sideFilterTwoStops = () => ({
  type: SIDE_FILTER_TWO_STOPS,
});

export const sideFilterThreeStops = () => ({
  type: SIDE_FILTER_THREE_STOPS,
});

export const topFilterCheapest = () => {
  return {
    type: TOP_FILTER_CHEAPEST,
  };
};

export const topFilterFastest = () => ({
  type: TOP_FILTER_FASTEST,
});

export const topFilterOptimal = () => ({
  type: TOP_FILTER_OPTIMAL,
});
