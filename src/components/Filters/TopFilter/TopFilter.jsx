import { connect } from 'react-redux';
import classNames from 'classnames';

import * as actions from '../../../redux/actions/filters';

import classes from './TopFilter.module.scss';

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
        onClick={topFilterCheapest}
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
        onClick={topFilterFastest}
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
