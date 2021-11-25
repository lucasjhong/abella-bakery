import React from 'react';
import Feed from 'react-instagram-authless-feed';

import './InstagramFeed.css';

const InstagramFeed = () => {
	return (
		<div className='feed-gallery'>
			<h3>Gallery</h3>
			<Feed
				userName='bonmacaronpatisserie'
				className='Feed'
				classNameLoading='Loading'
				limit='24'
			/>
		</div>
	);
};

export default InstagramFeed;
