import { INCREASE_ITEM, DECREASE_ITEM, ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from './action';

const initialStore = {
	cartItems: [
		// default test item
		// {
		// 	id: 'yggjiebibjd',
		// 	imageUrl: 'https://i.pinimg.com/474x/ec/36/fb/ec36fb9f509c3ac01ad1c6d4a4d45059.jpg',
		// 	category: 'Macaron',
		// 	title: 'Box of 10 - Custom',
		// 	description:
		// 		'Blueberry x 2, Chocolate x 1, Cookies n Cream x 1, Pistachio x 2, Strawberry x 2, Tiramisu x 2',
		// 	count: 1,
		// 	price: 29.99,
		// },
	],
};

export default (state = initialStore, action) => {
	let newCart;
	switch (action.type) {
		case INCREASE_ITEM:
			newCart = state.cartItems.map((cartItem) => {
				if (cartItem.id === action.payload.id) {
					cartItem = { ...cartItem, count: cartItem.count + 1 };
				}
				return cartItem;
			});
			return { ...state, cartItems: newCart };

		case DECREASE_ITEM:
			newCart = state.cartItems.map((cartItem) => {
				if (cartItem.id === action.payload.id) {
					cartItem = { ...cartItem, count: cartItem.count - 1 };
				}
				return cartItem;
			});
			return { ...state, cartItems: newCart };

		case ADD_ITEM:
			//Item id exists in the cart, increment the count by 1
			if (state.cartItems.find((obj) => obj.id === action.payload.id)) {
				newCart = state.cartItems.map((cartItem) => {
					if (cartItem.id === action.payload.id) {
						cartItem = { ...cartItem, count: cartItem.count + 1 };
					}
					return cartItem;
				});
				return { ...state, cartItems: newCart };
			}

			// Item id does not exist in the cart, add a new item
			var newCartItem = {
				id: action.payload.id,
				imageUrl: action.payload.imageUrl,
				category: action.payload.category,
				title: action.payload.title,
				description: action.payload.description,
				count: action.payload.count ? action.payload.count : 1,
				price: action.payload.price,
			};
			newCart = state.cartItems.push(newCartItem);
			return { ...state, newCart };

		case REMOVE_ITEM:
			console.log(action.payload);
			return {
				...state,
				cartItems: state.cartItems.filter((cartItem) => {
					return cartItem.id !== action.payload.id;
				}),
				amount: state.amount - 1,
			};

		case CLEAR_CART:
			console.log('resetting cart');
			return {
				cartItems: [],
			};

		// case GET_TOTAL:
		// 	let total,
		// 		amount = 0;
		// 	state.cartItems.map((item) => {
		// 		if (item) {
		// 			total += item.price;
		// 			amount += item.count;
		// 		}
		// 	});

		// 	return { ...state, total, amount };

		default:
			return state;
	}
};
