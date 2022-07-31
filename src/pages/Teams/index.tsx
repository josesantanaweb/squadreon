import React from 'react';
import Layout from 'components/Layout';
import TeamSelector from './components/TeamSelector';
import MembersSelector from './components/MembersSelector';
import Bio from './components/Bio';

const Teams = () => {
	return (
		<Layout>
			<div className="teams">
				<TeamSelector />
				<MembersSelector />
				<Bio />
			</div>
		</Layout>
	);
};

export default Teams;
