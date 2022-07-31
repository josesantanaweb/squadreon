import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from './features/teamsSlice';
import memberReducer from './features/memberSlice';

export const store = configureStore({
	reducer: {
		teams: teamsReducer,
		member: memberReducer,
	},
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
