import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from 'components/Layout';
import Button from 'components/Button';
import Accordion from './components/Accordion';

const About = () => {
	const [t] = useTranslation('global');
	return (
		<Layout>
			<div className="about">
				<div className="hero">
					<h1 className="hero-title">{t('about.title')}</h1>
					<h3 className="hero-subtitle">{t('about.subtitle')}</h3>
					<p className="hero-text">{t('about.text')}</p>
					<Button label={t('about.more')} variant="primary"/>
				</div>
				<div className="agile">
					<h3 className="agile-title">{t('about.agile-squads')}</h3>
					<h3 className="agile-text">{t('about.agile-squads-text')}</h3>
					<Accordion />
				</div>
			</div>
		</Layout>
	);
};

export default About;
