import { useDispatch } from 'react-redux';

import { addItem } from '../../store/cartSlice';

export default function ProductItems(props) {
  const dispatch = useDispatch();
  function addToCartHandler() {
    dispatch(
      addItem({
        id: props.id,
        title: props.title,
        price: props.price,
        quantity: 1,
        total: props.price,
      })
    );
  }

  return (
    <li className="flex justify-between rounded bg-gray-100 p-1 px-3 mb-1">
      <h1 className="font-semibold text-lg">{props.title}</h1>
      <div>
        <p className="bg-gray-600 text-white p-1 font-bold w-max float-start rounded">
          ₹ {props.price}.00
        </p>
        <button
          className="ml-4 ronded bg-slate-300 px-2 py-1 hover:bg-slate-400"
          onClick={addToCartHandler}
        >
          Add To Cart
        </button>
      </div>
    </li>
  );
}
