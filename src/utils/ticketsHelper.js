import { priceSorting, stopsSorting } from '../redux/helpers';

export const filterTickets = (tickets, side) => {
  return tickets.slice(0).filter((ticket) => {
    return stopsSorting(side, ticket);
  });
};
export const sortTickets = (tickets, top) => {
  return tickets.slice(0).sort((a, b) => {
    return priceSorting(top, a, b);
  });
};

export const moreTickets = (tickets, shown) => {
  return tickets.slice(0, shown);
};
