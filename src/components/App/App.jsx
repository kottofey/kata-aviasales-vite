// import { useEffect, useState } from 'react';

import aviaSalesLogo from '../../assets/Logo.svg';
import TopFilter from '../Filters/TopFilter';
import SideFilter from '../Filters/SideFilter';
// import Ticket from '../Ticket';
import ShowMoreButton from '../ShowMoreButton';
// import AviaSalesAPI from '../../api/AviaSalesAPI';

export default function App() {
  // const [tickets, setTickets] = useState({ tickets: [] });

  // useEffect(() => {
  //   let ignore = false;
  //
  //   const fetchTickets = async () => {
  //     const api = new AviaSalesAPI();
  //     api.searchId = await api.getSearchId();
  //     const result = await api.getTickets();
  //     if (!ignore) setTickets(result);
  //   };
  //
  //   try {
  //     fetchTickets().then(() => {});
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  //
  //   return () => {
  //     ignore = true;
  //   };
  // }, []);

  return (
    <>
      <img
        className='logo'
        src={aviaSalesLogo}
        alt='AviaSales Logo'
      />
      <div className='App'>
        <SideFilter />
        <main className='main'>
          <TopFilter />
          {/* {tickets.tickets.slice(0, 5).map((ticket) => { */}
          {/*  const key = */}
          {/*    ticket.segments[0].origin +*/}
          {/*    ticket.segments[0].destination +*/}
          {/*    ticket.segments[0].date; */}

          {/*  return ( */}
          {/*    <Ticket */}
          {/*      ticket={ticket} */}
          {/*      key={key} */}
          {/*    /> */}
          {/*  ); */}
          {/* })} */}
          <ShowMoreButton />
        </main>
      </div>
    </>
  );
}
