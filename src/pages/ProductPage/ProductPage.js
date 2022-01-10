import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
	favouriteProduct,
	unfavouriteProduct,
	postReview,
} from '../../components/reducers/userAction';
import { addItem } from '../../components/reducers/cartAction';

import axios from '../../components/common/axios';
import { CircularProgress } from '@mui/material';

import './ProductPage.scss';
import { toast } from 'react-toastify';

import { useHistory } from 'react-router-dom';
import Reviews from '../../components/Reviews/Reviews';
import { capitalizeFirstLetter } from '../../components/common/utilFunctions';

toast.configure();

const ProductPage = (props) => {
	const history = useHistory();
	const [productData, setProductData] = useState();
	const [count, setCount] = useState(1);
	const [relatedProducts, setRelatedProducts] = useState([]);
	const [relatedSpinner, setRelatedSpinner] = useState(true);

	const user = props.user;
	const productId = props.match.params.product;

	const redirectProductPage = (productId) => {
		history.push(`/collection/${productId}`);
		setCount(1);
	};

	const getRelatedProductData = async () => {
		setRelatedProducts([]);

		try {
			console.log('fetching relatedData');

			let relatedData = await axios
				// TODO: make related products similar to the category of the product being viewed
				.get(`/products/related`)
				.then((result) => {
					return result.data;
				});

			let filtered = relatedData
				.filter((item) => {
					return item.productId !== props.match.params.product;
				})
				.slice(0, 4);

			setRelatedProducts(filtered);
		} catch (err) {
			console.log(err);
		}
	};

	const getProductData = async () => {
		try {
			console.log('fetching product data');

			let data = await axios.get(`/products/${productId}`).then((result) => {
				return {
					title: result.data.title,
					productId: result.data.productId,
					price: result.data.price,
					description: result.data.description,
					imageUrl: result.data.imageUrl,
					category: result.data.category,
				};
			});

			if (!productData || data.productId !== productData.productId) {
				setProductData(data);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const toastNotify = (type, message) => {
		switch (type) {
			case 'success':
				return toast.success(message, {
					position: toast.POSITION.BOTTOM_LEFT,
				});
			case 'added':
				return toast.info(message, { position: toast.POSITION.BOTTOM_LEFT });
			case 'error':
				return toast.error(message, { position: toast.POSITION.BOTTOM_LEFT });

			default:
				return null;
		}
	};

	const addItemToCart = () => {
		props.addItem({
			id: productData.productId,
			imageUrl: productData.imageUrl,
			category: capitalizeFirstLetter(productData.category),
			title: productData.title,
			price: productData.price,
			count: count,
		});

		toastNotify('added', 'Item added to cart');
	};

	const increaseItemCount = () => {
		const newCount = count + 1;
		setCount(newCount);
	};

	const decreaseItemCount = () => {
		const newCount = count - 1;
		setCount(newCount);
	};

	useEffect(() => {
		axios.defaults.headers.common['Authorization'] = localStorage.getItem('FBIdToken');

		getProductData();
		getRelatedProductData();
	}, [props.match.params.product]);

	return (
		<div>
			{productData ? (
				<div className='page-container'>
					<div className='product-container'>
						<div className='image-panel'>
							<img alt={productData.title} src={productData.imageUrl} />
						</div>
						<div className='info-panel'>
							<h4 style={{ color: 'grey', marginBottom: '0' }}>
								{productData && capitalizeFirstLetter(productData.category)}
							</h4>
							<h1 style={{ marginTop: '12px' }}>{productData.title}</h1>
							<h4>${productData.price}</h4>

							<p>{productData.description}</p>
							<div className='item-count'>
								{count > 1 && <i class='fas fa-minus' onClick={() => decreaseItemCount()} />}
								{count <= 1 && (
									<i class='fas fa-minus' style={{ color: '#808080', cursor: 'default' }} />
								)}
								<p style={{ fontSize: '16px' }}>{count}</p>
								{count <= 4 && <i class='fas fa-plus' onClick={() => increaseItemCount()} />}
								{count >= 5 && (
									<i class='fas fa-plus' style={{ color: '#808080', cursor: 'default' }} />
								)}
							</div>
							<button onClick={addItemToCart}>ADD TO CART</button>
							{user.authenticated === true &&
								/* user.credentials.favourites.includes(productId) */
								(user.credentials.favourites.includes(productId) ? (
									<div className='favourite-button'>
										<i class='fas fa-heart' onClick={() => props.unfavouriteProduct(productId)} />
										<p>Remove Favourite</p>
									</div>
								) : (
									<div className='favourite-button'>
										<i class='far fa-heart' onClick={() => props.favouriteProduct(productId)} />
										<p>Add to Favourites</p>
									</div>
								))}
						</div>
					</div>

					<h3>Related Products</h3>
					<div className='related-container'>
						{relatedSpinner && relatedProducts.length !== 0 ? (
							relatedProducts.map((item) => {
								return (
									<div
										key={item.productId}
										className='related-product'
										onClick={() => redirectProductPage(item.productId)}
									>
										<img alt={item.title} src={item.imageUrl} />
										<h5>{item.title}</h5>
										<p>${item.price}</p>
									</div>
								);
							})
						) : (
							<CircularProgress />
						)}
					</div>
				</div>
			) : (
				<div className='empty'>
					<CircularProgress />
				</div>
			)}
			<Reviews productId={productId} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: state.user,
});

const mapActionsToProps = {
	postReview,
	favouriteProduct,
	unfavouriteProduct,
	addItem,
};

export default connect(mapStateToProps, mapActionsToProps)(ProductPage);
