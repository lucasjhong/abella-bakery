import { Box, Button, Rating, CircularProgress } from '@mui/material';
import axios from '../common/axios';
import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const UserReviews = ({ user }) => {
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

	const [reviewList, setReviewList] = useState([]);
	const [open, setOpen] = useState(false);
	const [buttonReviewId, setButtonReviewId] = useState();

	const handleOpen = (reviewId) => {
		setButtonReviewId(reviewId);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const confirmDelete = () => {
		removeReview(buttonReviewId);
		handleClose();
	};

	const setReviews = async () => {
		try {
			let data = await axios.get(`/${user.credentials.handle}/reviews`).then((result) => {
				return result.data;
			});
			setReviewList(data);
		} catch (err) {
			console.log(err);
		}
	};

	const removeReview = async (reviewId) => {
		try {
			let data = await axios.delete(`/reviews/${reviewId}`).then((result) => {
				// return result.data
				setReviews();
			});
			console.log(data);
		} catch (err) {
			console.log(err);
		}
		console.log('attempting to remove review ' + reviewId);
	};

	useEffect(() => {
		setReviews();
	}, []);

	return (
		<div>
			<h2>Reviews</h2>

			<Modal open={open} onClose={handleClose}>
				<Box sx={modalStyle}>
					<p>Deleting Review</p>
					<p>Are you sure you wish to delete this review? This action will be permanent.</p>
					<Button onClick={() => confirmDelete()}>Delete</Button>
				</Box>
			</Modal>

			<div className='review-header'>
				<p>Product #</p>
				<p>Date</p>
				<p style={{ flex: '2' }}>Rating</p>
				<p style={{ flex: '4' }}>Review</p>
				<p style={{ flex: '0.5' }}>{}</p>
			</div>

			{reviewList.length === 0 && (
				<div style={{ margin: 'auto' }}>
					<CircularProgress />
				</div>
			)}
			{reviewList != null &&
				reviewList.map((review) => {
					return (
						<div>
							<div className='review-item'>
								<p
									style={{ cursor: 'pointer' }}
									onClick={() => {
										history.push(`/collection/${review.productId}`);
									}}
								>
									{review.productId}
								</p>
								<p>{review.createdAt.slice(0, 10)}</p>
								<p style={{ flex: '2' }}>
									<Rating
										value={review.rating}
										precision={0.5}
										readOnly
										sx={{ color: '#efbbcf' }}
										size='medium'
									/>
								</p>

								<p style={{ flex: '4' }}>{review.content}</p>
								<p style={{ flex: '0.5' }}>
									<i class='fas fa-times' onClick={() => handleOpen(review.reviewId)} />
								</p>
							</div>
						</div>
					);
				})}
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps)(UserReviews);
