import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { sendCartData, fetchCartItems } from './store/cartSlice';

import Header from './components/E-Comm/Header';
import Products from './components/E-Comm/Products';
import Notify from './components/E-Comm/Notify';

let isInitial = true;

export default function App() {
  const cart = useSelector((state) => state.cart);

  const notify = useSelector((state) => state.ui.notify);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getCartData() {
      const response = await fetch(
        'https://test-api-cd004-default-rtdb.firebaseio.com/cart.json'
      );

      if (response.ok) {
        const data = await response.json();

        if (data) dispatch(fetchCartItems(data.cartItems));
        else dispatch(fetchCartItems([]));
      }
    }

    if (isInitial) {
      getCartData();
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {notify && <Notify title={notify.title} message={notify.message} />}
      <Header />
      <Products />
    </>
  );
}
