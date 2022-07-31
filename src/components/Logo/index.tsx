import React from "react";
import LogoSqd from "../../assets/images/logo.png";

const Logo = () => {
	return (
		<a href="/" className="logo">
			<img src={LogoSqd} alt="" className="logo" />
		</a>
	);
};

export default Logo;
