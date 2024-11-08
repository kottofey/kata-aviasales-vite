import { useState } from 'react';

export default function TopFilter() {
  const [current, setCurrent] = useState('cheap');

  const handleClick = (evt) => {
    setCurrent(evt.target.id);
  };

  return (
    <aside className='top-filter'>
      <button
        className={
          current === 'cheap'
            ? 'top-filter__button top-filter__button--active'
            : 'top-filter__button'
        }
        type='button'
        id='cheap'
        onClick={(evt) => handleClick(evt)}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={
          current === 'fast'
            ? 'top-filter__button top-filter__button--active'
            : 'top-filter__button'
        }
        type='button'
        id='fast'
        onClick={(evt) => handleClick(evt)}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={
          current === 'optimal'
            ? 'top-filter__button top-filter__button--active'
            : 'top-filter__button'
        }
        type='button'
        id='optimal'
        onClick={(evt) => handleClick(evt)}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </aside>
  );
}
