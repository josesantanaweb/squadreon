import { createSlice } from '@reduxjs/toolkit';
import data from '../../data.json';

const initialState = {
	member: data.teams[0].members[0],
};

export const memberSlice = createSlice({
	name: 'member',
	initialState,
	reducers: {
		setMember: (state, action) => {
			state.member = action.payload;
		},
	},
});

export const { setMember } = memberSlice.actions;

export default memberSlice.reducer;
