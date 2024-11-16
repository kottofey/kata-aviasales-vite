import { connect } from 'react-redux';

import * as actions from '../../../redux/actions';

const {
  TOP_FILTER_CHEAPEST,
  TOP_FILTER_FASTEST,
  TOP_FILTER_OPTIMAL,
} = actions;

function TopFilter({
  current,
  topFilterCheapest,
  topFilterFastest,
  topFilterOptimal,
}) {
  return (
    <aside className='top-filter'>
      <button
        className={
          current === TOP_FILTER_CHEAPEST
            ? 'top-filter__button top-filter__button--active'
            : 'top-filter__button'
        }
        type='button'
        id='cheap'
        onClick={topFilterCheapest}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={
          current === TOP_FILTER_FASTEST
            ? 'top-filter__button top-filter__button--active'
            : 'top-filter__button'
        }
        type='button'
        id='fast'
        onClick={topFilterFastest}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={
          current === TOP_FILTER_OPTIMAL
            ? 'top-filter__button top-filter__button--active'
            : 'top-filter__button'
        }
        type='button'
        id='optimal'
        onClick={topFilterOptimal}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </aside>
  );
}

const mapStateToProps = (state) => {
  return { current: state.filters.top };
};

export default connect(mapStateToProps, actions)(TopFilter);
