import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import sortReducer from './features/sort/sortSlice';
import cartReducer from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    sort:sortReducer,
    cart: cartReducer,
    // Add other reducers here
  },
});

export default store;