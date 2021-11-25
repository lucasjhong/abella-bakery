import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from '@mui/material';

import { INCREASE_ITEM, DECREASE_ITEM, REMOVE_ITEM, GET_TOTAL } from '../reducers/action';
import './Cartitem.scss';

const CartItem = ({ id, category, title, imageUrl, description, count, price, dispatch }) => {
	useEffect(() => {
		dispatch({ type: GET_TOTAL });
	});

	const [modalState, setModalState] = useState(false);

	const showModal = () => {
		setModalState(true);
	};

	const hideModal = () => {
		setModalState(false);
	};

	return (
		<div className='cart-item'>
			{modalState && (
				<Modal open={modalState} onClose={hideModal}>
					<div className='confirmation-modal'>
						<i
							class='fas fa-exclamation-triangle'
							style={{ fontSize: '30px', color: 'rgb(150,150,150)' }}
						/>
						<p>You are about to delete the item from your cart. Are you sure?</p>
						<Button
							sx={{ color: '#efbbcf' }}
							onClick={() => dispatch({ type: REMOVE_ITEM, payload: { id: id } })}
						>
							Confirm
						</Button>
						<Button onClick={hideModal} sx={{ color: '#808080' }}>
							Back
						</Button>
					</div>
				</Modal>
			)}
			<div className='item-image'>
				<img alt='' src={imageUrl} />
			</div>
			<div className='item-info'>
				<div className='item-description'>
					{/* temporary styles, to be cleaned up with classes */}
					<p className='category'>{category}</p>
					<p className='title'>{title}</p>
					<p className='description'>{description}</p>
				</div>
				<div className='item-count'>
					<div className='counter'>
						{count > 1 && (
							<i
								class='fas fa-minus'
								onClick={() => dispatch({ type: DECREASE_ITEM, payload: { id: id } })}
							/>
						)}
						{count <= 1 && <i class='fas fa-minus' onClick={() => showModal()} />}
						<p>{count}</p>
						<i
							class='fas fa-plus'
							onClick={() => dispatch({ type: INCREASE_ITEM, payload: { id: id } })}
						/>
					</div>
					<p className='price'>${(Math.ceil(price * count * 100) / 100).toFixed(2)}</p>
				</div>
			</div>
			<i className='fas fa-times' onClick={() => showModal()} />
		</div>
	);
};

// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return {
// 		remove: () => dispatch({ type: REMOVE_ITEM, payload: { id: ownProps.id } }),
// 		increase: () =>
// 			dispatch({ type: INCREASE_ITEM, payload: { id: ownProps.id, amount: ownProps.amount } }),
// 		decrease: () =>
// 			dispatch({ type: DECREASE_ITEM, payload: { id: ownProps.id, amount: ownProps.amount } }),
// 	};
// };

export default connect()(CartItem);
