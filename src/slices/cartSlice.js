import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  cartTotal: 0,
  cartTotalAmount: 0,
  buyer: {}
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(item => item._id === action.payload._id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
       const sizeArr= state.cartItems[itemIndex].sizeArr.findIndex(item => item.size === action.payload.size);
        sizeArr >= 0 ? state.cartItems[itemIndex].sizeArr[sizeArr].quantity += 1 :  state.cartItems[itemIndex].sizeArr.push({size:action.payload.size,quantity:1});
      }
      else {
        state.cartItems.push({ ...action.payload });
      }
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
    },
    increaseQuantity(state, action) {
      const product = state.cartItems.find(item => item._id === action.payload);
      product.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const product = state.cartItems.find(item => item._id === action.payload);
      product.quantity -= 1;
    },
    caculateTotal(state, action) {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach(item => {
        amount += item.quantity;
        total += item.quantity * item.price;
      });
      state.cartTotalAmount = amount;
      state.cartTotal = total;
    },
    setBuyer(state,action) {
      state.buyer = action.payload;
    }

  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, caculateTotal, setBuyer } = cartSlice.actions

export default cartSlice.reducer