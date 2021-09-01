import {createSlice} from "@reduxjs/toolkit";
import products from '../../components/assets/products.json'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    products: products
  },
  reducers: {
    addToCart: (state, actions) => {
      const product = actions.payload
      state.cart.push(product)
    },
    removeFromCart: (state, actions) => {
      const product = actions.payload
      state.cart = state.cart.filter(p => p.id !== product.id)
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer