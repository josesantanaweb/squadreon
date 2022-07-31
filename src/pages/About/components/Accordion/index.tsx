import React, {useState} from 'react';
import Icon from 'components/Icon';
import { useTranslation } from 'react-i18next';


const About = () => {
	const [t] = useTranslation('global');
	const [clickItem, setClickItem] = useState(0);

	const handleCollapseItem = (index: number) => {
		setClickItem(index);
	};

	const options = [
		{
			icon: "category-alt",
			name: `${t('about.tailored')}`,
			description: `${t('about.tailored-text')}`,
		},
		{
			icon: "user-check",
			name: `${t('about.autonomous')}`,
			description: `${t('about.autonomous-text')}`,
		},
		{
			icon: "vector",
			name: `${t('about.flexible')}`,
			description: `${t('about.flexible-text')}`,
		},
		{
			icon: "timer",
			name: `${t('about.mature')}`,
			description: `${t('about.mature-text')}`,
		}
	];

	return (
		<div className="accordion">
			<ul className="accordion-items">
				{
					options.map((item: any, index: number) => (
						<li
							className={`accordio-item ${clickItem === index && 'is-open'}`}
							onClick={() => handleCollapseItem(index)}
							key={index}
						>
							<div className="accordio-top">
								<Icon name={item.icon} />
								<h5>{item.name}</h5>
								{
									<Icon name={clickItem === index ? 'bx-minus-circle' : 'bx-plus-circle'} size="small" />
								}
							</div>
							<div className="accordio-body">
								<p>{item.description}</p>
							</div>
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default About;
