import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import {
  TOP_FILTER_CHEAPEST,
  TOP_FILTER_FASTEST,
  TOP_FILTER_OPTIMAL,
  topFilterCheapest,
  topFilterFastest,
  topFilterOptimal,
} from '../../../redux/actions/filters';

import classes from './TopFilter.module.scss';

export default function TopFilter() {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.filters.top);

  const activeButtonClass = classNames(
    classes['top-filter__button'],
    classes['top-filter__button--active']
  );
  return (
    <aside className={classes['top-filter']}>
      <button
        className={
          current === TOP_FILTER_CHEAPEST
            ? activeButtonClass
            : classes['top-filter__button']
        }
        type='button'
        id='cheap'
        onClick={() => dispatch(topFilterCheapest())}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={
          current === TOP_FILTER_FASTEST
            ? activeButtonClass
            : classes['top-filter__button']
        }
        type='button'
        id='fast'
        onClick={() => dispatch(topFilterFastest())}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={
          current === TOP_FILTER_OPTIMAL
            ? activeButtonClass
            : classes['top-filter__button']
        }
        type='button'
        id='optimal'
        onClick={() => dispatch(topFilterOptimal())}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </aside>
  );
}
