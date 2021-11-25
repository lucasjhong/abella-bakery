import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './cartReducer';

import userReducer from './userReducer';
import dataReducer from './dataReducer';
import uiReducer from './uiReducer';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
	cart: cartReducer,
	user: userReducer,
	data: dataReducer,
	UI: uiReducer,
});

const store = createStore(
	reducers,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
