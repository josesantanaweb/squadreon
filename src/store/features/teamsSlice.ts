import { createSlice } from '@reduxjs/toolkit';
import data from '../../data.json';

const initialState = {
	teams: data.teams,
	team: data.teams[0],
};

export const teamsSlice = createSlice({
	name: 'teams',
	initialState,
	reducers: {
		setTeams: (state, action) => {
			state.teams = action.payload;
		},
		setTeam: (state, action) => {
			state.team = action.payload;
		},
	},
});

export const { setTeams, setTeam } = teamsSlice.actions;

export default teamsSlice.reducer;
