import { configureStore } from '@reduxjs/toolkit';
import carReduser from '../features/carSlice/carSlice'
export const store = configureStore({
  reducer: {
    car: carReduser,
  },
});
