import classes from './TicketDetail.module.scss';

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
    <div className={classes.details}>
      <div className={classes.details__col}>
        <span className={classes.details__title}>{route}</span>
        <span className={classes.details__content}>{arrDep}</span>
      </div>
      <div className={classes.details__col}>
        <span className={classes.details__title}>В ПУТИ</span>
        <span className={classes.details__content}>{travelTime}</span>
      </div>
      <div className={classes.details__col}>
        <span className={classes.details__title}>
          {stopsMap.get(stopsQty)}
        </span>
        <span className={classes.details__content}>
          {stops.length === 0 ? '–' : stops.join(' – ')}
        </span>
      </div>
    </div>
  );
}
