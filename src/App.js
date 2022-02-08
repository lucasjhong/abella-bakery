import React, { useEffect } from 'react';
import './App.css';
import './Layout/Layout';
import Layout from './Layout/Layout';
import { Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import store from './components/reducers/store';
// import { SET_AUTHENTICATED } from './components/common/';
import { logoutUser, getUserData } from './components/reducers/userAction';
import axios from './components/common/axios';

import Macarons from './pages/Macarons/Macarons';
import Checkout from './pages/Checkout/Checkout';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import BuildMacaron from './pages/BuildMacaron/BuildMacaron';
import ProductPage from './pages/ProductPage/ProductPage';
import User from './pages/User/User';
import ScrollToTop from './components/common/ScrollToTop';

// const history = createBrowserHistory();

const App = () => {
	// Checks localStorage and validates token, set user session if true
	useEffect(() => {
		const token = localStorage.FBIdToken;

		if (token) {
			const decodedToken = jwtDecode(token);
			if (decodedToken.exp * 1000 < Date.now()) {
				logoutUser();
			} else {
				axios.defaults.headers.common['Authorization'] = token;
				getUserData();
			}
		}
		console.log(token);
	}, []);

	return (
		<Provider store={store}>
			<ScrollToTop>
				<Layout>
					<Switch>
						<Route path='/macarons' component={Macarons} />
						<Route path='/checkout' component={Checkout} />
						<Route path='/cart' component={Cart} />
						<Route path='/about' component={About} />
						<Route path='/user' component={User} />
						<Route exact path='/collection/:product' component={ProductPage} />

						<Route path='/menu/:filter' component={Menu} />
						<Route path='/menu/' component={Menu} />
						<Route path='/macaron-flavours' component={Macarons} />
						<Route path='/macaron-builder/:id' component={BuildMacaron} />
						<Route path='/macaron-builder/' component={BuildMacaron} />
						<Route path='/' component={Home} />
					</Switch>
				</Layout>
			</ScrollToTop>
		</Provider>
	);
};

export default App;
