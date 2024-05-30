import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// import Header from './components/Header';
// import LoginForm from './components/LoginForm';
// import Welcome from './components/Welcome';
// import Counter from './components/Counter';

import Header from './components/E-Comm/Header';
import Products from './components/E-Comm/Products';
import Notify from './components/E-Comm/Notify';

export default function App() {
  // const selectAuth = useSelector((state) => state.auth.isAuthenticated);

  const cart = useSelector((state) => state.cart);

  const [notify, setNotify] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setNotify({ title: 'Sending...', message: 'Sending cart data!' });
      try {
        const response = await fetch(
          'https://test-api-cd004-default-rtdb.firebaseio.com/cart.json',
          {
            method: 'PUT',
            body: JSON.stringify(cart),
          }
        );
        if (response.ok) {
          setNotify({
            title: 'Success!',
            message: 'Cart data sent successfully!',
          });
        } else {
          throw new Error('Error!');
        }
      } catch (error) {
        setNotify({
          title: error.message,
          message: 'Sending cart data failed!',
        });
      }
    }
    fetchData();

    setTimeout(() => {
      setNotify(false);
    }, 3000);
  }, [cart]);

  return (
    <>
      {notify && <Notify title={notify.title} message={notify.message} />}
      <Header />
      <Products />
    </>
  );
}
