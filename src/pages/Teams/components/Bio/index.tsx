import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import Icon from 'components/Icon';
import { useSelector } from "react-redux";
import { memberSelector, teamSelector } from 'store/selectors';

const Bio = () => {
	const [t] = useTranslation('global');
	const member:any = useSelector(memberSelector);
	const team = useSelector(teamSelector);

	return (
		<div className="bio">
			<div className="bio-top">
				<img src={member?.photo} alt="member" className="bio-member" />
				<div className="bio-description">
					<div className="bio-principal">
						<h4>{member?.name}</h4>
						<span>
							<Icon name="bx-map" size="small"/>
							<p>
								{member?.country}
							</p>
						</span>
						<div className="bio-socials">
							<Icon name="bxl-instagram" size="small"/>
							<Icon name="bxl-linkedin" size="small"/>
						</div>
					</div>
					<h6 className="bio-technology">{member?.position}</h6>
					<p className="bio-info">{member?.description}</p>
				</div>
				<img src={team?.logo} alt="team" className="bio-team" />
			</div>
			<div className="bio-content">
				<div className="bio-highlights">
					<h3>Highlights</h3>
					{
						member?.highlights && member?.highlights.map((item: any, index: number) => (
							<div className="bio-technologies" key={index}>
								<h6>{item.name}</h6>
								<p>{item.description}</p>
							</div>
						))
					}
				</div>
				<div className="bio-history">
					<div className="tabs">
						<div className="tab-header">
							<div className="tab active">
								{t('teams.history')}
							</div>
						</div>
						<div className="tab-body">
							<div className="history">
								{
									member?.history && member?.history.map((item: any, index: number) => (
										<div className="history-item" key={index}>
											<h3>{item.date}</h3>
											<h6>{item.project}</h6>
											<p>{item.description}</p>
										</div>
									))
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bio;
