import { CircularProgress, Rating, TextField, Button } from '@mui/material';
import axios from '../common/axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import { postReview } from '../../components/reducers/userAction';
import ProductReviews from './ProductReviews';

const Reviews = ({ user, productId }) => {
	const history = useHistory();
	const [productReviews, setProductReviews] = useState([]);
	const [reviewForm, setReviewForm] = useState({
		stars: 0,
		content: '',
	});
	const [productAverage, setProductAverage] = useState(0);
	const [submitState, setSubmitState] = useState('ready');

	const getProductReviews = async () => {
		setProductReviews([]);
		try {
			let data = await axios.get(`/reviews/${productId}`).then((result) => {
				console.log(result.data);
				return result.data;
			});
			setProductReviews(data);
			setProductAverageRating(data);
		} catch (err) {
			console.log(err);
		}
	};

	const setProductAverageRating = (data) => {
		if (Array.isArray(data) && data.length > 0) {
			let total = 0;
			data.map((review) => {
				total += review.rating;
			});
			setProductAverage(Number((Math.round((total / data.length) * 100) / 100).toFixed(1)));
		} else {
			setProductAverage(0);
		}
	};

	const handleChange = (event) => {
		const newReviewForm = { ...reviewForm, [event.target.name]: event.target.value };
		setReviewForm(newReviewForm);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const review = {
			userId: user.credentials.userId,
			handle: user.credentials.handle,
			content: reviewForm.content,
			rating: reviewForm.stars,
		};

		console.log('form stubmitted with review: ' + review);

		try {
			setSubmitState('loading');
			let data = await axios.post(`/reviews/${productId}`, review);
			console.log(data);
			setSubmitState('success');
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		axios.defaults.headers.common['Authorization'] = localStorage.getItem('FBIdToken');
		getProductReviews();
	}, [productId]);

	return (
		<div>
			<ProductReviews productReviews={productReviews} productAverage={productAverage} />

			<form className='review-form' onSubmit={handleSubmit}>
				<h3>Rate this product</h3>

				<Rating
					value={reviewForm.stars}
					onChange={(event, newValue) => {
						setReviewForm({ ...reviewForm, stars: newValue });
					}}
					sx={{ color: '#efbbcf' }}
					size='large'
				/>
				<TextField
					fullWidth
					name='content'
					type='text'
					multiline
					rows='2'
					placeholder='Write a review. Max character 200'
					style={{ marginTop: '12px' }}
					onChange={handleChange}
					inputProps={{ maxLength: 200 }}
					size='small'
				/>
				{user.authenticated ? (
					<Button
						variant='contained'
						type='submit'
						disable={submitState === 'success'}
						sx={{ height: '30px' }}
					>
						{submitState === 'success' && <i class='fas fa-check' style={{ fontSize: '20px' }} />}
						{submitState === 'loading' && <CircularProgress size={20} />}
						{submitState === 'ready' && <p style={{ fontSize: '14px' }}>Add Review</p>}
					</Button>
				) : (
					<p onClick={() => history.push('/user')} style={{ cursor: 'pointer' }}>
						You need to be logged in to leave a review. Log in here.
					</p>
				)}
			</form>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	productId: ownProps.productId,
	user: state.user,
});

const mapActionsToProps = {
	postReview,
};

export default connect(mapStateToProps, mapActionsToProps)(Reviews);
