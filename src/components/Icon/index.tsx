import React from "react";
import classNames from "classnames";

// Types
export interface IconProps {
  name?: string;
  size?: 'small' | 'medium' | 'large';
}
const Icon:React.FC<IconProps> = ({name, size="medium"}) => {
	const iconClass = classNames({
		"bx": true,
		[`${name}`]: true,
		"fs-6": size === "small",
		"fs-4": size === "medium",
		"fs-3": size === "large",
	});
	return (
		<i className={iconClass}></i>
	);
};

export default Icon;
