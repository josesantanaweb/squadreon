import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from 'components/Layout';
import work1 from 'assets/images/work-1.png';
import react from 'assets/images/react.png';
import node from 'assets/images/node.png';
import mongo from 'assets/images/mongo.png';
import express from 'assets/images/express.png';

const Works = () => {
	const [t] = useTranslation('global');
	return (
		<Layout>
			<div className="works">
				<div className="work">
					<h3 className="work-title">{t('works.work')}</h3>
					<p className="work-text">{t('works.description')}</p>
					<div className="work-technologies">
						<h3>{t('works.technologies')}</h3>
						<ul className="work-items">
							<li className="work-item">
								<span>
									<img src={react} alt="react" />
								</span>
								<p>React</p>
							</li>
							<li className="work-item">
								<span>
									<img src={node} alt="node" />
								</span>
								<p>Node</p>
							</li>
							<li className="work-item">
								<span>
									<img src={mongo} alt="mongo" />
								</span>
								<p>Mongo</p>
							</li>
							<li className="work-item">
								<span>
									<img src={express} alt="express" />
								</span>
								<p>Express</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="visualizer">
					<div className="visualizer-controls">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="isualizer-picture">
						<img src={work1} alt="work-1" />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Works;
