import { ADD_ITEM, REMOVE_ITEM } from './action';

export const addItem = (productData) => (dispatch) => {
	dispatch({
		type: ADD_ITEM,
		payload: {
			...productData,

			description: productData.hasOwnProperty('description') ? productData.description : '',
		},
	});
};

export const removeItem = (productId) => (dispatch) => {
	dispatch({
		type: REMOVE_ITEM,
		payload: {
			id: productId,
		},
	});
};
