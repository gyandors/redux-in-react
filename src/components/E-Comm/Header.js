import { useSelector, useDispatch } from 'react-redux';
import { setShowCart } from '../../store/cartSlice';

import Cart from './Cart';

export default function Header() {
  const showCart = useSelector((state) => state.cart.showCart);
  const dispatch = useDispatch();

  return (
    <>
      <header className="bg-white h-[56px] flex justify-between items-center p-2 shadow-lg shadow-gray-400">
        <span className="text-2xl font-semibold">Redux Cart</span>
        <button
          className="border-2 rounded-md border-gray-500 p-1 flex items-center hover:bg-gray-100"
          onClick={() => dispatch(setShowCart())}
        >
          My Cart
          <span className="ml-2 text-xl bg-gray-500 text-white rounded-lg px-3">
            {0}
          </span>
        </button>
      </header>
      {showCart && <Cart />}
    </>
  );
}
