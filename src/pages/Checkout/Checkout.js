import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { postOrder } from '../../components/reducers/userAction';

import './Checkout.scss';

const Checkout = ({ cart, user, postOrder }) => {
	const history = useHistory();
	const calculateTotalPrice = () => {
		let total = 0;
		cart.cartItems.map((cartItem) => {
			total += cartItem.price * cartItem.count;
		});
		return (Math.ceil(total * 100) / 100).toFixed(2);
	};

	const totalPrice = calculateTotalPrice();
	const shipping = totalPrice <= 50 ? 8.99 : 0;
	// const tax = +((totalPrice + shipping) * 0.13);
	const tax = +(totalPrice * 0.13);
	const finalPrice = +totalPrice + +(totalPrice <= 50 ? 8.99 : 0) + +(totalPrice * 0.13);
	const cartValid = cart.cartItems.length > 0;

	return (
		<>
			<div className='cover'>
				<img
					src='https://images.unsplash.com/photo-1569041747714-bbf5ff077ba5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1316&q=80'
					className='banner'
					alt='Macarons'
					style={{ filter: 'brightness(80%)' }}
				/>
				<h1 className='centered'>checkout.</h1>
			</div>

			{cartValid && (
				<div className='checkout'>
					<h2>Review Your Order</h2>
					<p className='return-button' onClick={() => history.push('/cart')}>
						Back to Cart
					</p>
					<div className='cart-itemlist'>
						{cart.cartItems && cart.cartItems.length === 0 && <h3>Your cart is empty</h3>}
						{cart.cartItems &&
							cart.cartItems.map((item) => {
								return (
									<>
										<div className='checkout-item'>
											<div className='item-image'>
												<img alt='' src={item.imageUrl} />
											</div>
											<div className='item-info'>
												<div className='item-description'>
													<p className='category'>{item.category}</p>
													<p className='title'>{item.title}</p>
													<p className='description'>{item.description}</p>
												</div>
												<div className='item-total'>
													<div className='item-count'>
														<p>Qty: {item.count}</p>
													</div>
													<p className='price'>
														${(Math.ceil(item.price * item.count * 100) / 100).toFixed(2)}
													</p>
												</div>
											</div>
										</div>
										<hr
											style={{
												margin: '8px 0',
												border: '1px solid rgb(240, 240, 240)',
											}}
										/>
									</>
								);
							})}
						<div className='checkout-total'>
							<p>Subtotal: ${totalPrice}</p>
							<p>Shipping: ${shipping}</p>
							<p>HST: ${tax.toFixed(2)}</p>
							<h3>Total: ${finalPrice.toFixed(2)}</h3>
						</div>
						<p className='confirm-button' onClick={() => postOrder(cart, user, history)}>
							Confirm Order
						</p>
					</div>
				</div>
			)}
		</>
	);
};

const mapStateToProps = (state) => ({
	user: state.user,
	cart: state.cart,
});

const mapActionsToProps = {
	postOrder,
};

export default connect(mapStateToProps, mapActionsToProps)(Checkout);
