import { useSelector, useDispatch } from 'react-redux';
import { toggleShowCart } from '../../store/uiSlice';

import Cart from './Cart';

export default function Header() {
  const showCart = useSelector((state) => state.ui.showCart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalCartItems = cartItems.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);

  return (
    <>
      <header className="bg-white h-[56px] flex justify-between items-center p-2 shadow-lg shadow-gray-400">
        <span className="text-2xl font-semibold">Redux Cart</span>
        <button
          className="border-2 rounded-md border-gray-500 p-1 flex items-center hover:bg-gray-100"
          onClick={() => dispatch(toggleShowCart())}
        >
          My Cart
          <span className="ml-2 text-xl bg-gray-500 text-white rounded-lg px-3">
            {totalCartItems}
          </span>
        </button>
      </header>
      {showCart && <Cart />}
    </>
  );
}
