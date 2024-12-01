import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { closeError } from '../../redux/actions/tickets';

import classes from './LoadError.module.scss';

export default function LoadError({ errors }) {
  const dispatch = useDispatch();
  const isOpened = useSelector((state) => state.errors.isOpened);

  const className = classnames(classes.loadError, {
    [classes.isOpened]: isOpened,
  });

  return (
    <div className={className}>
      Ошибка сети (уже {errors > 2 && 'аж'} {errors}), продолжаем
      загрузку!
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
