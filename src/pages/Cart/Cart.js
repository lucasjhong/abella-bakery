import React from 'react';

import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';

const Cart = () => {
	return (
		<>
			<div className='cover'>
				<img
					src='https://images.unsplash.com/photo-1569041747714-bbf5ff077ba5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1316&q=80'
					className='banner'
					alt='Macarons'
					style={{ filter: 'brightness(80%)' }}
				/>
				<h1 className='centered'>cart.</h1>
			</div>
			<ShoppingCart />
		</>
	);
};

export default Cart;
