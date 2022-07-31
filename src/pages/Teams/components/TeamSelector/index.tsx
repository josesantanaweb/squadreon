import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';
import { teamsSelector } from 'store/selectors';
import { setTeam } from 'store/features/teamsSlice';

const TeamSelector = () => {
	const [t] = useTranslation('global');
	const dispatch = useDispatch();
	const teams = useSelector(teamsSelector);
	const [activeItem, setActiveItem] = useState(1);

	const handleSelected = (item: any) => {
		setActiveItem(item.id);
		dispatch(setTeam(item));
	};

	return (
		<div className="teams-selector">
			<div className="teams-selector-items" >
				{
					teams && teams.map((item: any, index: number) => (
						<div
							className={`teams-selector-item ${activeItem === item.id ? 'active' : ''}`}
							key={index}
							onClick={() => handleSelected(item)}>
							<span>{item.id}</span>
							<div className="teams-preview">
								<div>
									<h6>{t('teams.team')}</h6>
									<h5>{item.name}</h5>
								</div>
								<img src={`${item.logo}`} alt={`${item.name}`} />
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
};

export default TeamSelector;
