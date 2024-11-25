import { connect } from 'react-redux';
import classNames from 'classnames';
import { useEffect } from 'react';
import { notification } from 'antd';

import aviaSalesLogo from '../../assets/Logo.svg';
import TopFilter from '../Filters/TopFilter';
import SideFilter from '../Filters/SideFilter';
import Ticket from '../Ticket';
import ShowMoreButton from '../ShowMoreButton';
import * as filterActions from '../../redux/actions/filters';
import * as ticketActions from '../../redux/actions/tickets';

let didInit = false;

function App({ tickets, isLoading, fetchTickets, ticketsShown }) {
  const [api, contextHolder] = notification.useNotification();

  const logoClass = classNames({
    logo: true,
    'logo--loading': isLoading,
  });

  useEffect(() => {
    api.open({
      message: isLoading
        ? 'Билеты загружаются'
        : 'Загрузка завершена',
    });
  }, [isLoading]);

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      fetchTickets();
    }
  }, []);

  return (
    <>
      <img
        className={logoClass}
        src={aviaSalesLogo}
        alt='AviaSales Logo'
      />
      {contextHolder}
      <div className='App'>
        <SideFilter />
        <main className='main'>
          <TopFilter />
          {tickets.slice(0, ticketsShown).map((ticket) => {
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
          <ShowMoreButton />
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
  };
};

export default connect(mapStateToProps, {
  ...filterActions,
  ...ticketActions,
})(App);
