import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';

import aviaSalesLogo from '../../assets/Logo.svg';
import TopFilter from '../Filters/TopFilter';
import SideFilter from '../Filters/SideFilter';
import LoadError from '../LoadError';
import Ticket from '../Ticket';
import ShowMoreButton from '../ShowMoreButton';
import { fetchTickets } from '../../redux/actions/tickets';
import { selectFilteredTickets } from '../../redux/reducers/tickets';

import classes from './App.module.scss';

export default function App() {
  const dispatch = useDispatch();
  const isErrorOpened = useSelector((state) => state.errors.isOpened);

  const isLoading = useSelector((state) => state.isLoading);
  const errors = useSelector((state) => state.errors.count);
  const tickets = useSelector(selectFilteredTickets);

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
        <SideFilter />
        {isErrorOpened && <LoadError errors={errors} />}
        <main className={classes.main}>
          <TopFilter />
          {tickets.map((ticket) => {
            if (!ticket.price) return <p key='key'>NO OK</p>;
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
          {tickets.length ? (
            <ShowMoreButton />
          ) : (
            'Рейсов, подходящих под заданные фильтры, не найдено'
          )}
        </main>
      </div>
    </>
  );
}
