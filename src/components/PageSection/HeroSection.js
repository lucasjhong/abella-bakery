import React from 'react';
import { Link } from 'react-router-dom';

import './HeroSection.scss';

const HeroSection = () => {
	return (
		<div className='hero-container'>
			{/* <video
				// src='http://techslides.com/demos/sample-videos/small.webm'
				autoPlay
				loop
				muted
			/> */}
			{/* <img src='https://media1.tenor.com/images/758da48cacd0f588f5eebf1c14e3503b/tenor.gif?itemid=9753749' /> */}
			<img src='https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' />
			<Link to='/macarons' class='inside-image'>
				<h4>
					Explore Our Macarons <i class='fas fa-arrow-right' style={{ marginLeft: '10px' }} />
				</h4>
			</Link>
		</div>
	);
};

export default HeroSection;
