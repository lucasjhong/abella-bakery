import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from './action';

const initialState = {
	loading: false,
	errorList: { email: null, password: null, general: null },
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_ERRORS:
			return { ...state, loading: false, errorList: action.payload };

		case CLEAR_ERRORS:
			return {
				...state,
				loading: false,
				errorList: { email: null, password: null, general: null },
			};

		case LOADING_UI:
			return { ...state, loading: true };

		default:
			return state;
	}
}
