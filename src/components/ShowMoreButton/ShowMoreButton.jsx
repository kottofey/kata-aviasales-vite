export default function ShowMoreButton() {
  return (
    <button
      className='ShowMoreButton'
      id='showMoreButton'
      type='button'
      onClick={() => console.log('More Ticket Clicked!')}
    >
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  );
}
