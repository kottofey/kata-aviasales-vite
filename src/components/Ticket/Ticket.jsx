import { useState } from 'react';

import TicketDetail from '../TicketDetail';
import getDuration from '../../utils/getDuration';
import getDepartureDate from '../../utils/getDepartureDate';

export default function Ticket({ ticket }) {
  const { price, carrier, segments } = ticket;

  return (
    <article className='ticket'>
      <header className='ticket__header'>
        <span className='ticket__price'>{price}</span>
        <img
          className='ticket__logo'
          src={`https://pics.avs.io/110/36/${carrier}.png`}
          alt={`${carrier} logo`}
        />
      </header>
      {segments.map((segment, idx) => (
        <TicketDetail
          key={idx}
          route={`${segment.origin} – ${segment.destination}`}
          arrDep={getDepartureDate(segment.date, segment.duration)}
          travelTime={getDuration(segment.duration)}
          stopsQty={segment.stops.length}
          stops={segment.stops}
        />
      ))}
    </article>
  );
}
