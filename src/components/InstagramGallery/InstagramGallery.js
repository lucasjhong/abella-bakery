import React from 'react';
import './InstagramGallery.scss';

import InstagramFeed from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

const InstagramGallery = () => {
	return (
		<div className='instagram-gallery'>
			<i class='fab fa-instagram' style={{ fontSize: '48px', color: 'salmon' }} />
			<InstagramFeed token='IGQVJYdE1aX1pDb0tneVotV3R5ZAmllMExVeDFjcExWUE9fdVBaZATE0SXlkNkQ4OG5OdEE5QW9KdU53NkJjWHV3Ri01Y05LR1lMLXRjVVUtdHlJSGZADU0RDX2FSOWlvMnZAMNlNEVm5BZA2tWMFE0WklXTwZDZD' />
		</div>
	);
};

export default InstagramGallery;
