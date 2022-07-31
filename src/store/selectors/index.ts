import { RootState } from '..';

export const teamsSelector = (state: RootState) => state.teams.teams;
export const teamSelector = (state: RootState) => state.teams.team;
export const memberSelector = (state: RootState) => state.member.member;
