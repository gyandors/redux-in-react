import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../store/cartSlice';

import classes from './CartItem.module.css';

export default function CartItem(props) {
  const dispatch = useDispatch();

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          ₹{props.total.toFixed(2)}{' '}
          <span className={classes.itemprice}>
            (₹{props.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              dispatch(removeItem(props.id));
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(
                addItem({
                  id: props.id,
                  title: props.title,
                  price: props.price,
                  quantity: 1,
                  total: props.price,
                })
              );
            }}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}
