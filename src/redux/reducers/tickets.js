// Reducers
import { createSelector } from '@reduxjs/toolkit';

import {
  REQ_TICKETS_START,
  REQ_TICKETS_DONE,
  FETCH_SUCCESS,
  REQ_TICKETS_ERROR,
  RCVD_ID,
  MORE_TICKETS,
  CLOSE_ERROR,
} from '../actions/tickets';
import { priceSorting, stopsSorting } from '../helpers';

export const tickets = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case REQ_TICKETS_START:
      return true;
    case REQ_TICKETS_DONE:
      return false;
    default:
      return state;
  }
};

export const fetchError = (
  state = { count: 0, isOpened: false, cause: '' },
  action
) => {
  switch (action.type) {
    case REQ_TICKETS_ERROR:
      return {
        ...state,
        count: state.count + 1,
        cause: action.payload,
        isOpened: true,
      };
    case CLOSE_ERROR:
      return {
        ...state,
        isOpened: false,
      };
    default:
      return state;
  }
};

export const searchId = (state = null, action) => {
  switch (action.type) {
    case RCVD_ID:
      return action.payload;
    case REQ_TICKETS_DONE:
      return null;
    default:
      return state;
  }
};

export const ticketsShown = (state = 5, action) => {
  switch (action.type) {
    case MORE_TICKETS:
      return state + 5;
    default:
      return state;
  }
};

export const selectFilteredTickets = createSelector(
  [
    (state) => state.tickets,
    (state) => state.filters.side,
    (state) => state.filters.top,
    (state) => state.ticketsShown,
  ],
  (selectTickets, selectSide, selectTop, selectTicketsShown) => {
    return selectTickets
      .slice(0)
      .filter((ticket) => {
        return stopsSorting(selectSide, ticket);
      })
      .sort((a, b) => priceSorting(selectTop, a, b))
      .slice(0, selectTicketsShown);
  }
);
