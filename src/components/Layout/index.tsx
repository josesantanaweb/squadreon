import React from 'react';
import Header from 'components/Header';

// Types
export interface LayoutProps {}

const Layout:React.FC<LayoutProps> = ({children}) => {
	return (
		<div className="main">
			<div className="wrapper">
				<Header/>
				{children}
			</div>
		</div>
	);
};

export default Layout;
