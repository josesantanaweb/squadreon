import React from 'react';
import Icon from 'components/Icon';

export interface ToggleProps {
  handleExpand?: () => void;
}

const Toggle:React.FC<ToggleProps> = ({handleExpand}) => {
	return (
		<span className="toggle-menu" onClick={handleExpand}>
			<Icon name="bx-menu" size="medium"/>
		</span>
	);
};

export default Toggle;
