import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './slices/basketSlice'
import canteenSlice from './slices/canteenSlice'


export const store = configureStore({
  reducer: {
    basket: basketSlice,
    canteen: canteenSlice
  },
})