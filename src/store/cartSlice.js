import { createSlice } from '@reduxjs/toolkit';
import { showNotification } from './uiSlice';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { cartItems: [] },
  reducers: {
    fetchCartItems(state, action) {
      state.cartItems = action.payload;
    },

    addItem(state, action) {
      const updatedCartIems = state.cartItems.map((ci) => {
        if (ci.id === action.payload.id) {
          return {
            ...ci,
            quantity: ci.quantity + 1,
            total: ci.total + action.payload.price,
          };
        }
        return ci;
      });

      if (!updatedCartIems.find((ci) => ci.id === action.payload.id)) {
        updatedCartIems.push(action.payload);
      }

      state.cartItems = updatedCartIems;
    },

    removeItem(state, action) {
      let updatedCartIems = state.cartItems.map((ci) => {
        if (ci.id === action.payload) {
          return {
            ...ci,
            quantity: ci.quantity - 1,
            total: ci.total - ci.price,
          };
        }
        return ci;
      });

      state.cartItems = updatedCartIems.filter((ci) => ci.quantity !== 0);
    },
  },
});

export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(
      showNotification({ title: 'Sending...', message: 'Sending cart data!' })
    );

    try {
      const response = await fetch(
        'https://test-api-cd004-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      if (response.ok) {
        dispatch(
          showNotification({
            title: 'Success!',
            message: 'Cart data sent successfully!',
          })
        );
      } else {
        throw new Error('Error!');
      }
    } catch (error) {
      dispatch(
        showNotification({
          title: error.message,
          message: 'Sending cart data failed!',
        })
      );
    }

    setTimeout(() => {
      dispatch(showNotification(false));
    }, 3000);
  };
}

// export function getCartData() {
//   return async (dispatch) => {
//     const response = await fetch(
//       'https://test-api-cd004-default-rtdb.firebaseio.com/cart.json'
//     );

//     console.log(response);
//     const data = await response.json();

//     if(response.ok){
//       dispatch()
//     }
//     console.log(data);
//   };
// }

export const { fetchCartItems, addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
