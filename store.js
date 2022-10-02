import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './slices/couterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})