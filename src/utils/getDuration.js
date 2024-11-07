export default function calculateTimes(duration) {
  const hrs = Math.floor(duration / 60).toString();
  const min = (duration % 60).toString();

  return `${hrs.padStart(2, '0')}ч ${min.padStart(2, '0')}м`;
}
