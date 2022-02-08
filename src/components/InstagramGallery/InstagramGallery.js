import React from 'react';
import './InstagramGallery.scss';

import InstagramFeed from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

const InstagramGallery = () => {
	return (
		<div className='instagram-gallery'>
			<i class='fab fa-instagram' style={{ fontSize: '48px', color: 'salmon' }} />
			<InstagramFeed token='IGQVJXYXFwVjhhNVg4bGZAmSy1FUk1ZAYV9LVDRUbFZAXaHV3eUljLWk2X3BDcWo3MmI1MzF0QXlpSE1XMUdZAM3BzTWpIOWVDMFAzRlVaTUtHZAE0td09YQlAxUllTeFNiR0hLclFWT0VHTl9GR0gyQXlPdgZDZD' />
		</div>
	);
};

export default InstagramGallery;
