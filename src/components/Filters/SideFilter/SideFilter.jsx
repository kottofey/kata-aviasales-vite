import { useDispatch, useSelector } from 'react-redux';

import {
  sideFilterAll,
  sideFilterNoStops,
  sideFilterOneStop,
  sideFilterTwoStops,
  sideFilterThreeStops,
  SIDE_FILTER_ALL,
  SIDE_FILTER_NO_STOPS,
  SIDE_FILTER_ONE_STOP,
  SIDE_FILTER_TWO_STOPS,
  SIDE_FILTER_THREE_STOPS,
} from '../../../redux/actions/filtersAction';

import classes from './SideFilter.module.scss';

export default function SideFilter() {
  const dispatch = useDispatch();
  const side = useSelector((state) => state.filters.side);
  return (
    <aside className={classes['side-filter']}>
      <h1 className={classes['side-filter__title']}>
        КОЛИЧЕСТВО ПЕРЕСАДОК
      </h1>

      <input
        className={classes['side-filter__checkbox']}
        type='checkbox'
        id='inputAll'
        checked={side[SIDE_FILTER_ALL]}
        onChange={() => dispatch(sideFilterAll())}
      />
      <label htmlFor='inputAll'>Все</label>

      <input
        className={classes['side-filter__checkbox']}
        type='checkbox'
        id='inputNone'
        checked={side[SIDE_FILTER_NO_STOPS]}
        onChange={() => dispatch(sideFilterNoStops())}
      />
      <label htmlFor='inputNone'>Без пересадок</label>
      <input
        className={classes['side-filter__checkbox']}
        type='checkbox'
        id='inputOne'
        checked={side[SIDE_FILTER_ONE_STOP]}
        onChange={() => dispatch(sideFilterOneStop())}
      />
      <label htmlFor='inputOne'>1 пересадка</label>
      <input
        className={classes['side-filter__checkbox']}
        type='checkbox'
        id='inputTwo'
        checked={side[SIDE_FILTER_TWO_STOPS]}
        onChange={() => dispatch(sideFilterTwoStops())}
      />
      <label htmlFor='inputTwo'>2 пересадки</label>
      <input
        className={classes['side-filter__checkbox']}
        type='checkbox'
        id='inputThree'
        checked={side[SIDE_FILTER_THREE_STOPS]}
        onChange={() => dispatch(sideFilterThreeStops())}
      />
      <label htmlFor='inputThree'>3 пересадки</label>
    </aside>
  );
}
