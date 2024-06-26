import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { globalSlice } from './data/globalSlice';

export const store = configureStore({
  reducer: {
    [globalSlice.reducerPath]: globalSlice.reducer,
  },
});

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;