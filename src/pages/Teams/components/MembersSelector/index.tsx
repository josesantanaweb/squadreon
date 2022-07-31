import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';
import { teamSelector } from 'store/selectors';
import { setMember } from 'store/features/memberSlice';

const MembersSelector = () => {
	const [t] = useTranslation('global');
	const dispatch = useDispatch();
	const team = useSelector(teamSelector);
	const [activeItem, setActiveItem] = useState(1);
	const [members, setMembers] = useState(team.members);

	useEffect(() => {
		setMembers(team.members);
	}, [team]);


	const handleSelected = (item: any) => {
		setActiveItem(item.id);
		dispatch(setMember(item));
		console.log(item);
	};

	return (
		<div className="member-selector">
			<div className="member-selector-team">
				<div className="preview">
					<div>
						<h6>{t('teams.team')}</h6>
						<h5>{team.name}</h5>
					</div>
					<img src={`${team.logo}`} alt={`${team.name}`} />
				</div>
				<div className="members">
					<div className="members-top">
						<h6>{t('teams.members')}</h6>
						<span>{members.length}</span>
					</div>
					{
						members && members.map((item: any, index: number) => (
							<div
								key={index}
								className={`members-item ${activeItem === item.id ? 'active' : ''}`}
								onClick={() => handleSelected(item)}
							>
								<img src={`${item.photo}`} alt={`${item.name}`} />
								<div>
									<h4>{item.name}</h4>
									<p>{item.position}</p>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
};

export default MembersSelector;
