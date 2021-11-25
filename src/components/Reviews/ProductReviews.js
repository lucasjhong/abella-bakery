import { Rating, Pagination } from '@mui/material';
import React, { useState } from 'react';
// import ReactPaginate from 'react-paginate';
import './Reviews.scss';

const ProductReviews = (props) => {
	const [page, setPage] = useState(1);
	const reviewPerPage = 5;

	const pageCount = props.productReviews
		? Math.ceil(props.productReviews.length / reviewPerPage)
		: 1;

	const handleChange = (event, value) => {
		setPage(value);
		console.log(value);
	};

	const spliceStart = 0 + reviewPerPage * (page - 1);

	return (
		<div className='product-review'>
			<h3>Reviews on this product</h3>
			<div className='average-rating'>
				<h2>{props.productAverage}</h2>

				<Rating
					value={props.productAverage}
					precision={0.1}
					readOnly
					sx={{ color: '#efbbcf', marginLeft: '12px' }}
					size='large'
				/>
			</div>
			{props.productAverage === 0 && <h4>No reviews exist on this product</h4>}
			<div style={{ marginBottom: '36px' }}>
				{props.productReviews !== null ? (
					props.productReviews.slice(spliceStart, spliceStart + reviewPerPage).map((review) => {
						return (
							<div className='product-review item' key={review.reviewId}>
								<h4>{review.handle}</h4>
								<Rating
									value={review.rating}
									readOnly
									sx={{ color: '#efbbcf', margin: '6px' }}
									size='small'
								/>
								<p>{review.content}</p>
							</div>
						);
					})
				) : (
					<h4>No reviews have been submitted for this product yet.</h4>
				)}
			</div>
			<Pagination count={pageCount} page={page} onChange={handleChange} />
		</div>
	);
};

export default ProductReviews;
