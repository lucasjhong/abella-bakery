import {
	SET_USER,
	SET_ERRORS,
	CLEAR_ERRORS,
	LOADING_UI,
	SET_UNAUTHENTICATED,
	CLEAR_CART,
} from './action';
import axios from '../../components/common/axios';

export const loginUser = (userData) => (dispatch) => {
	dispatch({ type: LOADING_UI });

	axios
		.post('/login', userData)
		.then((res) => {
			setAuthHeader(res.data.token);
			dispatch(getUserData());
			dispatch({ type: CLEAR_ERRORS });
			// history.push('/');
		})
		.catch((err) => {
			console.log(err);
			dispatch({ type: SET_ERRORS, payload: err.response.data });
		});
};

export const signupUser = (userData, history) => (dispatch) => {
	// axios
	// .post('/signup', userData)
	// .then((res) => {
	// 	setLoginState('loggedin');
	// 	localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
	// 	console.log(res.data);
	// 	setLoading(false);
	// })
	// .catch((err) => {
	// 	console.log(err);
	// 	setErrors(err.response.data);
	// 	setLoading(false);
	// });

	dispatch({ type: LOADING_UI });

	axios
		.post('/signup', userData)
		.then((res) => {
			setAuthHeader(res.data.token);
			console.log(axios.defaults);
			dispatch(getUserData());
			dispatch({ type: CLEAR_ERRORS });
			// history.push('/');
		})
		.catch((err) => {
			console.log(err.response.data);
			dispatch({ type: SET_ERRORS, payload: err.response.data });
		});
};

export const getUserData = () => (dispatch) => {
	axios
		.get('/user')
		.then((res) => {
			dispatch({ type: SET_USER, payload: res.data });
		})
		.catch((err) => console.log(err));
};

export const favouriteProduct = (productId) => (dispatch) => {
	axios
		.get(`/user/${productId}/favourite`)
		.then((res) => {
			dispatch({ type: SET_USER, payload: res.data });
		})
		.catch((err) => console.log(err));
};

export const unfavouriteProduct = (productId) => (dispatch) => {
	axios
		.get(`/user/${productId}/unfavourite`)
		.then((res) => {
			dispatch({ type: SET_USER, payload: res.data });
		})
		.catch((err) => console.log(err));
};

export const logoutUser = () => (dispatch) => {
	localStorage.removeItem('FBIdToken');
	delete axios.defaults.headers.common['Authorization'];
	dispatch({ type: SET_UNAUTHENTICATED });
};

// REFACTOR postReview?
export const postReview = () => (dispatch) => {};

export const removeReview = () => {};

export const postOrder = (cart, user, history) => (dispatch) => {
	const orderData = {
		products: cart.cartItems,
		handle: user.authenticated ? user.credentials.handle : 'visitor',
		status: 'pending',
	};
	console.log(orderData);
	axios
		.post('/orders', orderData)
		.then((res) => {
			dispatch({ type: CLEAR_CART });
		})
		.then((res) => {
			history.push('/');
		})
		.catch((err) => {
			console.log(err);
		});
};

const setAuthHeader = (token) => {
	const FBIdToken = `Bearer ${token}`;
	localStorage.setItem('FBIdToken', FBIdToken);
	axios.defaults.headers.common['Authorization'] = FBIdToken;
};
