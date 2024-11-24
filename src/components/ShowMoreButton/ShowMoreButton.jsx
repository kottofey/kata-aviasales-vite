import { connect } from 'react-redux';

import * as actions from '../../redux/actions/tickets';

function ShowMoreButton({ moreTickets }) {
  return (
    <button
      className='ShowMoreButton'
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
