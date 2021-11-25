import React, { useEffect, useState } from 'react';
import axios from '../common/axios';
import { CircularProgress } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal, Button, Box } from '@mui/material';

import { unfavouriteProduct } from '../../components/reducers/userAction';
import { addItem } from '../reducers/cartAction';
import { capitalizeFirstLetter } from '../common/utilFunctions';

const UserFavourites = (props) => {
	let history = useHistory();

	const modalStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		borderRadius: '8px',
		boxShadow: 24,
		p: 4,
	};

	const [favouritesList, setFavouritesList] = useState([]);
	const [open, setOpen] = useState(false);
	const [buttonFavouriteId, setButtonFavouriteId] = useState();

	const handleOpen = (productId) => {
		setButtonFavouriteId(productId);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const setFavourites = async () => {
		try {
			let data = await axios.get(`/products/favourites/`).then((result) => {
				return result.data;
			});
			setFavouritesList(data);
		} catch (err) {
			console.log(err);
		}
	};

	const confirmUnfavourite = () => {
		props.unfavouriteProduct(buttonFavouriteId);
		handleClose();
	};

	useEffect(() => {
		setFavourites();
	}, [props.user.credentials.favourites]);

	return (
		<div>
			<h2>Favourites</h2>

			{/* 
			<div className='userorder-list'>
				<p>Favourites</p>

			</div> */}

			<div className='user-panel-data'>
				<Modal open={open} onClose={handleClose}>
					<Box sx={modalStyle}>
						<p>Are you sure you wish remove this item from your favourite list?</p>
						<Button onClick={() => confirmUnfavourite()}>Unfavourite</Button>
					</Box>
				</Modal>
				{favouritesList === null && <CircularProgress />}
				{favouritesList != null &&
					favouritesList.map((item) => {
						return (
							<div className='favourite-item'>
								<img alt='' src={item.imageUrl} style={{ flex: '2' }} />
								<p style={{ flex: '1' }}>{capitalizeFirstLetter(item.category)}</p>
								<p
									style={{ flex: '3', fontWeight: '900', cursor: 'pointer' }}
									onClick={() => {
										history.push(`/collection/${item.productId}`);
									}}
								>
									{item.title}
								</p>
								{/* <p onClick={() => {
																			addItem({
											id: item.productId,
											image: item.imageUrl,
											category: item.category,
											title: item.title,
											price: item.price
										})
								}}>Add to cart</p> */}
								<p style={{ flex: '1' }}>
									<i
										class='fas fa-times'
										onClick={() => {
											handleOpen(item.productId);
										}}
									/>
								</p>
							</div>
						);
					})}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: state.user,
});

const mapActionsToProps = {
	unfavouriteProduct,
	addItem,
};

export default connect(mapStateToProps, mapActionsToProps)(UserFavourites);
