import { connect } from 'react-redux';

import * as actions from '../../../redux/actions';

function SideFilter({
  side,
  sideFilterAll,
  sideFilterNoStops,
  sideFilterOneStop,
  sideFilterTwoStops,
  sideFilterThreeStops,
}) {
  return (
    <aside className='side-filter'>
      <h1 className='side-filter__title'>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>

      <input
        className='side-filter__checkbox'
        type='checkbox'
        id='inputAll'
        checked={side.SIDE_FILTER_ALL}
        onChange={sideFilterAll}
      />
      <label htmlFor='inputAll'>Все</label>

      <input
        className='side-filter__checkbox'
        type='checkbox'
        id='inputNone'
        checked={side.SIDE_FILTER_NO_STOPS}
        onChange={sideFilterNoStops}
      />
      <label htmlFor='inputNone'>Без пересадок</label>
      <input
        className='side-filter__checkbox'
        type='checkbox'
        id='inputOne'
        checked={side.SIDE_FILTER_ONE_STOP}
        onChange={sideFilterOneStop}
      />
      <label htmlFor='inputOne'>1 пересадка</label>
      <input
        className='side-filter__checkbox'
        type='checkbox'
        id='inputTwo'
        checked={side.SIDE_FILTER_TWO_STOPS}
        onChange={sideFilterTwoStops}
      />
      <label htmlFor='inputTwo'>2 пересадки</label>
      <input
        className='side-filter__checkbox'
        type='checkbox'
        id='inputThree'
        checked={side.SIDE_FILTER_THREE_STOPS}
        onChange={sideFilterThreeStops}
      />
      <label htmlFor='inputThree'>3 пересадки</label>
    </aside>
  );
}

const mapStateToProps = (state) => {
  return { side: state.side };
};

export default connect(mapStateToProps, actions)(SideFilter);
