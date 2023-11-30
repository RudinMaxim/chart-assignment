import { configureStore } from '@reduxjs/toolkit';
import { ChartApi } from '../api/ChartApi';
import { setupListeners } from '@reduxjs/toolkit/query';
export const store = configureStore({
	reducer: {
		[ChartApi.reducerPath]: ChartApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(ChartApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
