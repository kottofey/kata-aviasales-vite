export default function SideFilter() {
  return (
    <>
      <aside className='side-filter'>
        <h1 className='side-filter__title'>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>

        <input
          className='side-filter__checkbox'
          type='checkbox'
          id='inputAll'
        />
        <label htmlFor='inputAll'>Все</label>

        <input
          className='side-filter__checkbox'
          type='checkbox'
          id='inputNone'
        />
        <label htmlFor='inputNone'>Без пересадок</label>
        <input
          className='side-filter__checkbox'
          type='checkbox'
          id='inputOne'
        />
        <label htmlFor='inputOne'>1 пересадка</label>
        <input
          className='side-filter__checkbox'
          type='checkbox'
          id='inputTwo'
        />
        <label htmlFor='inputTwo'>2 пересадки</label>
        <input
          className='side-filter__checkbox'
          type='checkbox'
          id='inputThree'
        />
        <label htmlFor='inputThree'>3 пересадки</label>
      </aside>
      {/* <button type='button'>развернуть</button> */}
    </>
  );
}
