import { configureStore } from '@reduxjs/toolkit'
import cineRedudecer from "./cineSlice"

export default configureStore({
  reducer: {
    movieoData : cineRedudecer
  }
})