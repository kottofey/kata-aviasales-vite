import { useEffect, useState } from 'react';

import aviaSalesLogo from '../../assets/Logo.svg';
import TopFilter from '../Filters/TopFilter';
import SideFilter from '../Filters/SideFilter';
import Ticket from '../Ticket';
import ShowMoreButton from '../ShowMoreButton';
import AviaSalesAPI from '../../api/AviaSalesAPI';

export default function App() {
  const [tickets, setTickets] = useState({ tickets: [] });

  useEffect(() => {
    let ignore = false;

    const fetchTickets = async () => {
      const api = new AviaSalesAPI();
      try {
        api.searchId = await api.getSearchId();
        const result = await api.getTickets();
        if (!ignore) setTickets(result);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchTickets();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className='App'>
      <img
        className='App__logo'
        src={aviaSalesLogo}
        alt='AviaSales Logo'
      />
      <SideFilter />
      <TopFilter />
      {tickets.tickets.slice(0, 5).map((ticket, idx) => (
        <Ticket
          ticket={ticket}
          // List order won't be changing so index for key is ok
          key={idx}
        />
      ))}

      <ShowMoreButton />
    </div>
  );
}
