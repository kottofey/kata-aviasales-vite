import { useState } from 'react';
import classNames from 'classnames';

export default function TopFilter() {
  const [current, setCurrent] = useState('cheap');

  const handleClick = (e) => {
    setCurrent(e.target.id);
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
        onClick={(e) => handleClick(e)}
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
        onClick={(e) => handleClick(e)}
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
        onClick={(e) => handleClick(e)}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </aside>
  );
}
