import { useSelector } from 'react-redux';

import CartItem from './CartItem';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="w-[30rem] m-auto bg-white mt-3 rounded p-2">
      <h1 className="font-semibold text-xl text-center border-b-2 border-black">
        Cart
      </h1>
      {cartItems.length === 0 && (
        <h2 className="font-semibold text-center mt-2 text-red-500">
          Your cart is empty
        </h2>
      )}
      <ul className="max-h-80 overflow-auto">
        {cartItems.map((c) => {
          return (
            <CartItem
              key={c.id}
              id={c.id}
              title={c.title}
              quantity={c.quantity}
              total={c.total}
              price={c.price}
            />
          );
        })}
      </ul>
    </div>
  );
}
