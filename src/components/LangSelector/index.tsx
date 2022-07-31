import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../Icon';

const LangSelector = () => {
	const [t, i18n] = useTranslation('global');
	const [lang, setLang] = useState("en");
	const [openSelector, setOpenSelector] = useState(false);

	const handleOpenSelector = () => setOpenSelector(!openSelector);

	const handleSelectEs = () => {
		setLang("es");
		i18n.changeLanguage("es");
		localStorage.setItem("lng", "es");
		setOpenSelector(false);
	};

	const handleSelectEn = () => {
		setLang("en");
		i18n.changeLanguage("en");
		localStorage.setItem("lng", "en");
		setOpenSelector(false);
	};

	return (
		<div className="lang">
			<div className="lang-selected" onClick={handleOpenSelector}>
				<p className="lang-label">{lang}</p>
				<span className="lang-icon">
					<Icon name="bx-chevron-down" size="small" />
				</span>
			</div>
			{
				openSelector &&
        <ul className="lang-options">
        	<li onClick={handleSelectEs}>ES</li>
        	<li onClick={handleSelectEn}>EN</li>
        </ul>
			}
		</div>
	);
};

export default LangSelector;
