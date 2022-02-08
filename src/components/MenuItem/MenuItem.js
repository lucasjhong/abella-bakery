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

	return (
		<div className='menu-item' onClick={redirectProductPage} data-testid='menuItem'>
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
