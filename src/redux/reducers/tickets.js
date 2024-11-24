// Reducers
import {
  REQ_TICKETS_START,
  REQ_TICKETS_DONE,
  FETCH_SUCCESS,
  REQ_TICKETS_ERROR,
  RCVD_ID,
  MORE_TICKETS,
} from '../actions/tickets';

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

export const fetchError = (state = 0, action) => {
  switch (action.type) {
    case REQ_TICKETS_ERROR:
      return state + 1;
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
