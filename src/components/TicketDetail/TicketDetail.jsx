export default function TicketDetail({
  route,
  arrDep,
  travelTime,
  stopsQty,
  stops,
}) {
  const stopsMap = new Map();
  stopsMap.set(0, '0 ПЕРЕСАДОК');
  stopsMap.set(1, '1 ПЕРЕСАДКА');
  stopsMap.set(2, '2 ПЕРЕСАДКИ');
  stopsMap.set(3, '3 ПЕРЕСАДКИ');

  return (
    <div className='details'>
      <div className='details__col'>
        <span className='details__title'>{route}</span>
        <span className='details__content'>{arrDep}</span>
      </div>
      <div className='details__col'>
        <span className='details__title'>В ПУТИ</span>
        <span className='details__content'>{travelTime}</span>
      </div>
      <div className='details__col'>
        <span className='details__title'>
          {stopsMap.get(stopsQty)}
        </span>
        <span className='details__content'>
          {stops.length === 0 ? '–' : stops.join(' – ')}
        </span>
      </div>
    </div>
  );
}
