import { format } from 'date-fns';

export default function getDepartureDate(departureDate, duration) {
  const dep = format(new Date(departureDate), 'HH:mm');
  const arrMs =
    new Date(departureDate).getTime() + duration * 60 * 1000;
  const arr = format(new Date(arrMs), 'HH:mm');
  return [dep, arr].join(' – ');
}

console.log(getDepartureDate('2025-07-02T00:39:27.036Z', 1186));
// 20:25
