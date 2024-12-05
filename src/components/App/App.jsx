import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { useEffect, useRef, useMemo } from 'react';

import aviaSalesLogo from '../../assets/Logo.svg';
import TopFilter from '../Filters/TopFilter';
import SideFilter from '../Filters/SideFilter';
import LoadError from '../LoadError';
import Ticket from '../Ticket';
import ShowMoreButton from '../ShowMoreButton';
import { fetchTickets } from '../../redux/actions/ticketsAction';
import {
  filterTickets,
  moreTickets,
  sortTickets,
} from '../../utils/ticketsHelper';

import classes from './App.module.scss';

export default function App() {
  const dispatch = useDispatch();
  const isErrorOpened = useSelector((state) => state.errors.isOpened);

  const isLoading = useSelector((state) => state.isLoading);
  const side = useSelector((state) => state.filters.side);
  const top = useSelector((state) => state.filters.top);
  const shown = useSelector((state) => state.ticketsShown);
  const tickets = useSelector((state) => state.tickets);

  const ticketsFiltered = useMemo(
    () => filterTickets(tickets, side),
    [tickets, side]
  );

  const ticketsSorted = useMemo(
    () => sortTickets(ticketsFiltered, top),
    [ticketsFiltered, top]
  );

  const ticketsShown = useMemo(
    () => moreTickets(ticketsSorted, shown),
    [shown, ticketsSorted]
  );

  const logoClass = classNames({
    [classes.logo]: true,
    [classes['logo--loading']]: isLoading,
  });

  const didInit = useRef(false);

  useEffect(() => {
    if (!didInit.current) dispatch(fetchTickets());
    didInit.current = true;
  }, [dispatch]);

  return (
    <>
      <img
        className={logoClass}
        src={aviaSalesLogo}
        alt='AviaSales Logo'
      />
      <div className={classes.App}>
        {isErrorOpened && <LoadError />}
        <SideFilter />
        <main className={classes.main}>
          <TopFilter />
          {ticketsShown.map((ticket) => {
            const key =
              ticket.segments[0].origin +
              ticket.segments[0].destination +
              ticket.segments[0].date;

            return (
              <Ticket
                ticket={ticket}
                key={key}
              />
            );
          })}
          {ticketsShown.length ? (
            <ShowMoreButton />
          ) : (
            'Рейсов, подходящих под заданные фильтры, не найдено'
          )}
        </main>
      </div>
    </>
  );
}
