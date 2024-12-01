import { useDispatch, useSelector } from 'react-redux';

import { closeError } from '../../redux/actions/tickets';

import classes from './LoadError.module.scss';

export default function LoadError({ errors }) {
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.errors.cause);

  return (
    <div className={classes.loadError}>
      Упс! <em>{msg}</em> (ошибок уже {errors > 2 && 'аж'} {errors}),
      продолжаем загрузку!
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
