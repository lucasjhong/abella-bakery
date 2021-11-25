import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = (props, dispatch) => {
	const history = useHistory();

	// const [modalState, setModalState] = useState(false);

	// const showModal = () => {
	// 	setModalState(true);
	// };

	// const hideModal = () => {
	// 	setModalState(false);
	// };

	const redirectProductPage = () => {
		history.push(`/collection/${props.productId}`);
	};

	// const addToCart = () => {
	//   dispatch({
	//     type: ADD_ITEM,
	//     payload: {
	//       id: props.productId,
	//       image: props.imageUrl,
	//       category: props.category,
	//       title: props.title,
	//       description: props.description,
	//       price: props.price,
	//     },
	//   });
	// }

	return (
		<div className='menu-item' onClick={redirectProductPage}>
			{/* {modalState && (
				<Modal open={modalState} onClose={hideModal}>
					<div className='confirmation-modal'>
						<i
							class='fas fa-exclamation-triangle'
							style={{ fontSize: '30px', color: 'rgb(150,150,150)' }}
						/>
						<p>You are about to delete the item from your cart. Are you sure?</p>
						<Button
							style={{ color: '#efbbcf' }}
							// onClick={() => props.dispatch({ type: REMOVE_ITEM, payload: { id: id } })}
						>
							Confirm
						</Button>
						<Button onClick={hideModal}>Back</Button>
					</div>
				</Modal>
			)} */}
			<img src={props.imageUrl} alt='test' />
			<h5>{props.title}</h5>
			<p style={{ fontSize: '14px' }}>${props.price}</p>
			{/* <Button variant='outlined' size='small' onClick={redirectProductPage}>
				Details
			</Button> */}
		</div>
	);
};

export default connect()(MenuItem);
