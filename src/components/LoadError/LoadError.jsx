import { useDispatch, useSelector } from 'react-redux';

import { closeError } from '../../redux/actions/tickets';

import classes from './LoadError.module.scss';

export default function LoadError() {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);

  return (
    <div className={classes.loadError}>
      <em>
        {errors.status}: {errors.cause}
      </em>
      {errors.status !== 500 &&
        'Попробуйте перезагрузить страницу позднее.'}
      <button
        type='button'
        className={classes.button}
        onClick={() => dispatch(closeError())}
      >
        Закрыть это надоедливое окно
      </button>
    </div>
  );
}
