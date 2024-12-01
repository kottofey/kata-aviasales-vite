import { useDispatch } from 'react-redux';

import { moreTickets } from '../../redux/actions/tickets';

import classes from './ShowMoreButton.module.scss';

export default function ShowMoreButton() {
  const dispatch = useDispatch();
  return (
    <button
      className={classes.ShowMoreButton}
      id='showMoreButton'
      type='button'
      onClick={() => dispatch(moreTickets())}
    >
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  );
}
