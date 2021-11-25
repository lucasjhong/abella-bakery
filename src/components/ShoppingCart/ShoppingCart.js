import React from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

import CartItem from './CartItem';
import './ShoppingCart.scss';

const ShoppingCart = ({ cart, user }) => {
	let history = useHistory();
	// const [totalPrice, setTotalPrice] = useState();

	const calculateTotalPrice = () => {
		let total = 0;
		cart.cartItems.map((cartItem) => {
			total += cartItem.price * cartItem.count;
		});
		return (Math.ceil(total * 100) / 100).toFixed(2);
	};

	const totalPrice = calculateTotalPrice();

	const finalPrice = +totalPrice + +(totalPrice <= 50 ? 8.99 : 0) + +(totalPrice * 0.13);
	const cartValid = cart.cartItems.length > 0;
	const orderValid = cartValid && user.authenticated;

	return (
		<div className='cart-page'>
			<h1 style={{ textAlign: 'start' }}>Your Cart</h1>

			<div className='cart-container'>
				<div className='cart-itemlist'>
					{cart.cartItems && cart.cartItems.length === 0 && <h3>Your cart is empty</h3>}
					{cart.cartItems &&
						cart.cartItems.map((item) => {
							return (
								<React.Fragment>
									<CartItem key={item.id} {...item} />
									<hr
										style={{
											margin: '8px 0',
											border: '1px solid rgb(240, 240, 240)',
											width: '90%',
										}}
									/>
								</React.Fragment>
							);
						})}

					{/* <hr
						style={{
							alignSelf: 'start',
							width: '90%',
							color: 'black',
							backgroundColor: 'black',
							height: '4',
						}}
					/>
					<div className='cart-total'>
						<p>Total</p>
						<p>{totalPrice()}</p>
					</div> */}
				</div>
				<div className='cart-pricetotal'>
					<div className='summary-window'>
						<h2>Summary</h2>
						<div className='summary-item'>
							<p>Total</p>
							<p>${totalPrice}</p>
						</div>{' '}
						<div className='summary-item'>
							<p>Shipping</p>
							<p>{totalPrice >= 50 ? '-' : '$8.99'}</p>
						</div>
						<div className='summary-item'>
							<p>Discount</p>
							<p>-</p>
						</div>
						<div className='summary-item'>
							<p>Tax</p>
							<p>${(totalPrice * 0.13).toFixed(2)}</p>
						</div>
						<hr style={{ margin: '20px 0', opacity: '80%' }} />
						<div className='summary-item'>
							<p>Total</p>
							<p style={{ fontSize: '24px', fontWeight: 'bold', margin: '16px 0' }}>
								${finalPrice.toFixed(2)}
							</p>
						</div>
					</div>
					<div
						// REQUIRES USER TO BE LOGGED IN
						// className={orderValid ? 'cart-checkoutbutton active' : 'cart-checkoutbutton'}
						className={cartValid ? 'cart-checkoutbutton active' : 'cart-checkoutbutton'}
						onClick={cartValid ? () => history.push('/checkout') : null}
					>
						<p>{cartValid ? 'CONTINUE TO CHECKOUT' : null}</p>
						<div className='payment-list'>
							<i class='fab fa-cc-mastercard' />
							<i class='fab fa-cc-visa' />
							<i class='fab fa-google-pay' />
							<i class='fab fa-apple-pay' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { cart: state.cart, user: state.user };
};

export default connect(mapStateToProps)(ShoppingCart);
