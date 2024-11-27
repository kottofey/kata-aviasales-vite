import { connect } from 'react-redux';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';

import aviaSalesLogo from '../../assets/Logo.svg';
import TopFilter from '../Filters/TopFilter';
import SideFilter from '../Filters/SideFilter';
import Ticket from '../Ticket';
import ShowMoreButton from '../ShowMoreButton';
import * as filterActions from '../../redux/actions/filters';
import * as ticketActions from '../../redux/actions/tickets';
import { priceSorting, stopsSorting } from '../../redux/helpers';

function App({
  tickets,
  ticketsShown,
  isLoading,
  fetchTickets,
  top,
  side,
}) {
  const logoClass = classNames({
    logo: true,
    'logo--loading': isLoading,
  });
  const didInit = useRef(false);

  useEffect(() => {
    if (!didInit.current) fetchTickets();
    didInit.current = true;
  }, [fetchTickets]);

  const ticketsToRender = tickets
    .slice(0)
    .filter((ticket) => {
      return stopsSorting(side, ticket);
    })
    .sort((a, b) => priceSorting(top, a, b))
    .slice(0, ticketsShown);

  return (
    <>
      <img
        className={logoClass}
        src={aviaSalesLogo}
        alt='AviaSales Logo'
      />
      <div className='App'>
        <SideFilter />
        <main className='main'>
          <TopFilter />
          {ticketsToRender.map((ticket) => {
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
          {ticketsToRender.length ? (
            <ShowMoreButton />
          ) : (
            'Рейсов, подходящих под заданные фильтры, не найдено'
          )}
        </main>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    isLoading: state.isLoading,
    error: state.error,
    ticketsShown: state.ticketsShown,
    top: state.filters.top,
    side: state.filters.side,
  };
};

export default connect(mapStateToProps, {
  ...filterActions,
  ...ticketActions,
})(App);
