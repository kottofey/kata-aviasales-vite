import { getSearchId, getTickets } from '../../api/AviaSalesAPI';

export const REQ_TICKETS_START = 'REQ_TICKETS_START';
export const REQ_TICKETS_DONE = 'REQ_TICKETS_DONE';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const REQ_TICKETS_ERROR = 'REQ_TICKETS_ERROR';
export const RCVD_ID = 'RCVD_ID';
export const MORE_TICKETS = 'MORE_TICKETS';
export const CLOSE_ERROR = 'CLOSE_ERROR';

export const reqTicketsStart = () => ({
  type: REQ_TICKETS_START,
});

export const reqTicketsDone = () => ({
  type: REQ_TICKETS_DONE,
});

export const fetchSuccess = (tickets) => ({
  type: FETCH_SUCCESS,
  payload: tickets,
});

export const rcvdId = (id) => ({
  type: RCVD_ID,
  payload: id,
});

export const reqTicketsError = (e) => ({
  type: REQ_TICKETS_ERROR,
  payload: e,
});

export const closeError = () => ({
  type: CLOSE_ERROR,
});

export const moreTickets = () => ({
  type: MORE_TICKETS,
});

// Thunks
export const fetchTickets = () => async (dispatch, getState) => {
  try {
    if (!getState().searchId) {
      dispatch(reqTicketsStart());
      const searchId = await getSearchId();
      dispatch(rcvdId(searchId));
    }

    const resp = await getTickets(getState().searchId);
    dispatch(fetchSuccess(resp.tickets));

    if (resp.stop) {
      dispatch(reqTicketsDone());
    } else {
      dispatch(fetchTickets());
    }
  } catch (e) {
    dispatch(
      reqTicketsError({
        status: e.cause?.status,
        statusText: e.cause?.statusText,
      })
    );
    if (e.cause.status === 500) {
      dispatch(fetchTickets());
    } else {
      dispatch(reqTicketsDone());
    }
  }
};
