import TicketDetail from '../TicketDetail';
import getDuration from '../../utils/getDuration';
import getDepartureDate from '../../utils/getDepartureDate';

export default function Ticket({ ticket }) {
  const { price, carrier, segments } = ticket;

  const priceFormatted = Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <article className='ticket'>
      <header className='ticket__header'>
        <span className='ticket__price'>{priceFormatted}</span>
        <img
          className='ticket__logo'
          src={`https://pics.avs.io/110/36/${carrier}.png`}
          alt={`${carrier} logo`}
        />
      </header>
      {segments.map((segment) => {
        const key =
          segment.origin + segment.destination + segment.date;
        return (
          <TicketDetail
            key={key}
            route={`${segment.origin} – ${segment.destination}`}
            arrDep={getDepartureDate(segment.date, segment.duration)}
            travelTime={getDuration(segment.duration)}
            stopsQty={segment.stops.length}
            stops={segment.stops}
          />
        );
      })}
    </article>
  );
}
