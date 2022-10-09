import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cart/cartSlice'
import categoriesReducer from './slices/categories/categoriesSlice'
import userReducer from './slices/user/userSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
    user: userReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})