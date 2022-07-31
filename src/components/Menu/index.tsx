import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
// Types
export interface MenuProps {}

const Menu:React.FC<MenuProps> = () => {
	const [t] = useTranslation('global');
	return (
		<ul className="menu">
			<li className="menu-item">
				<Link to="/" className="menu-link">
					{t('menu.about')}
				</Link>
			</li>
			<li className="menu-item">
				<Link to="/teams" className="menu-link">
					{t('menu.teams')}
				</Link>
			</li>
			<li className="menu-item">
				<Link to="/works" className="menu-link">
					{t('menu.works')}
				</Link>
			</li>
		</ul>
	);
};

export default Menu;
