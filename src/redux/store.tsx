import { configureStore } from '@reduxjs/toolkit';
import optionsSlice from './reducers/optionsSlice';

export const store = configureStore({
  reducer: {
    options: optionsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
