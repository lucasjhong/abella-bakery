import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

import './Layout.css';

const Layout = (props) => {
	return (
		<React.Fragment>
			<NavBar />
			<main>{props.children}</main>
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
