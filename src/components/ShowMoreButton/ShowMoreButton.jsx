import { connect } from 'react-redux';

import * as actions from '../../redux/actions/tickets';

import classes from './ShowMoreButton.module.scss';

function ShowMoreButton({ moreTickets }) {
  return (
    <button
      className={classes.ShowMoreButton}
      id='showMoreButton'
      type='button'
      onClick={moreTickets}
    >
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actions)(ShowMoreButton);
