import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isCartOpen: false,
  cartItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartIsOpen: (state, action) => {
      state.isCartOpen = !action.payload
    },
    setItemToCart: (state, action) => {
      state.cartItems = action.payload
    },
  },
})

export const { setCartIsOpen, setItemToCart } = cartSlice.actions

export default cartSlice.reducer