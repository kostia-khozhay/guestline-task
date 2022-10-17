import hotelListReducer from '../containers/HotelList/hotelList.slice';

import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  hotelList: hotelListReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
