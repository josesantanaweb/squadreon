import React, { useState } from 'react';
import Logo from 'components/Logo';
import Menu from 'components/Menu';
import Icon from 'components/Icon';
import LangSelector from 'components/LangSelector';
import Toggle from 'components/Toggle';
import classNames from "classnames";

const Header = () => {
	const [expanded, setExpanded] = useState(false);
	const menuClass = classNames({
		"navbar": true,
		"expanded": expanded,
	});

	const handleExpand = () => setExpanded(!expanded);

	return (
		<div className="header">
			<div className="brand">
				<Logo />
				<Toggle handleExpand={handleExpand}/>
			</div>
			<div className={menuClass}>
				<Menu/>
				<LangSelector/>
				<div className="socials">
					<a href="http://www.google.com" className="socials-icon">
						<Icon name="bx-calendar-check" size="medium"/>
					</a>
					<a href="http://www.google.com" className="socials-icon">
						<Icon name="bxl-linkedin" size="medium"/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
