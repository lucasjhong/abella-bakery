import React from 'react';
import Iframe from 'react-iframe';

import './About.scss';

const About = (props) => {
	const mapStyle = [
		{
			featureType: 'water',
			elementType: 'geometry',
			stylers: [
				{
					color: '#e9e9e9',
				},
				{
					lightness: 17,
				},
			],
		},
		{
			featureType: 'landscape',
			elementType: 'geometry',
			stylers: [
				{
					color: '#f5f5f5',
				},
				{
					lightness: 20,
				},
			],
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry.fill',
			stylers: [
				{
					color: '#ffffff',
				},
				{
					lightness: 17,
				},
			],
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry.stroke',
			stylers: [
				{
					color: '#ffffff',
				},
				{
					lightness: 29,
				},
				{
					weight: 0.2,
				},
			],
		},
		{
			featureType: 'road.arterial',
			elementType: 'geometry',
			stylers: [
				{
					color: '#ffffff',
				},
				{
					lightness: 18,
				},
			],
		},
		{
			featureType: 'road.local',
			elementType: 'geometry',
			stylers: [
				{
					color: '#ffffff',
				},
				{
					lightness: 16,
				},
			],
		},
		{
			featureType: 'poi',
			elementType: 'geometry',
			stylers: [
				{
					color: '#f5f5f5',
				},
				{
					lightness: 21,
				},
			],
		},
		{
			featureType: 'poi.park',
			elementType: 'geometry',
			stylers: [
				{
					color: '#dedede',
				},
				{
					lightness: 21,
				},
			],
		},
		{
			elementType: 'labels.text.stroke',
			stylers: [
				{
					visibility: 'on',
				},
				{
					color: '#ffffff',
				},
				{
					lightness: 16,
				},
			],
		},
		{
			elementType: 'labels.text.fill',
			stylers: [
				{
					saturation: 36,
				},
				{
					color: '#333333',
				},
				{
					lightness: 40,
				},
			],
		},
		{
			elementType: 'labels.icon',
			stylers: [
				{
					visibility: 'off',
				},
			],
		},
		{
			featureType: 'transit',
			elementType: 'geometry',
			stylers: [
				{
					color: '#f2f2f2',
				},
				{
					lightness: 19,
				},
			],
		},
		{
			featureType: 'administrative',
			elementType: 'geometry.fill',
			stylers: [
				{
					color: '#fefefe',
				},
				{
					lightness: 20,
				},
			],
		},
		{
			featureType: 'administrative',
			elementType: 'geometry.stroke',
			stylers: [
				{
					color: '#fefefe',
				},
				{
					lightness: 17,
				},
				{
					weight: 1.2,
				},
			],
		},
	];

	return (
		<>
			<div className='cover'>
				<img
					src='https://sundukovy.com/wp-content/uploads/2017/07/Remi_2017_SS_13.jpg'
					className='banner'
					alt='Macarons'
					style={{ filter: 'brightness(80%)' }}
				/>
				<h1 className='centered'>about us.</h1>
			</div>

			<div className='about-us'>
				<div className='outer-box' style={{ backgroundColor: 'white' }}>
					<h1>Our Story</h1>
					<div className='storybox'>
						<div className='storybox-panel'>
							<img src='https://images.pexels.com/photos/3983581/pexels-photo-3983581.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
						</div>
						<div className='storybox-panel'>
							<p style={{ width: '80%' }}>
								Ellen started baking in 1995, as a hobby as well as a way of giving her two boys
								delicious treats. She fell in love with the process, being involved with it more as
								time went by. With the passion, she started teaching classes to spread her love and
								joy of baking, and after many years, made her dream come true of opening her own
								bakery.
							</p>
						</div>
					</div>
				</div>

				<div className='outer-box' style={{ backgroundColor: 'white' }}>
					<h1>Our Goals</h1>
					<div className='storybox'>
						<div className='storybox-panel'>
							<p style={{ width: '80%' }}>
								Just as she was baking for her little boys, she alwasys sought to use the best
								ingredients available. We are open about every single ingredient that goes into our
								products, which you can find here. We also make our products with love and care, to
								deliver the best product that we can possibly make with every order. They will
								always be made fresh, with our own original recipes.
							</p>
						</div>
						<div className='storybox-panel'>
							<img src='https://images.pexels.com/photos/3983665/pexels-photo-3983665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
						</div>
					</div>
				</div>

				<div className='outer-box' style={{ backgroundColor: 'white' }}>
					<h1>Location</h1>

					<div className='storybox' style={{ width: '100%' }}>
						<Iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6866.969271355756!2d-79.40402473893913!3d43.64390468406444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34de51f2be2f%3A0xb81657126fc8e128!2s609%20King%20St%20W%2C%20Toronto%2C%20ON%20M5V%201M5!5e0!3m2!1sen!2sca!4v1618095386633!5m2!1sen!2sca'
							width='600'
							height='450'
							style={mapStyle}
							allowfullscreen=''
							loading='lazy'
						></Iframe>
						<div className='storybox-panel' style={{ whiteSpace: 'pre-line', fontSize: '16px' }}>
							ABELLA BAKERY {'\n'}
							{'\n'} 609 King St W, {'\n'}Toronto, ON, M5V 1M5 {'\n'} {'\n'}
							Mon-Fri 9:30am - 5:30pm
							{'\n'}
							Sat-Sun 11:00am - 5:00pm
							{'\n'}
							{'\n'}
							905-337-9407
							{'\n'}
							289-218-8224
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</>
	);
};

export default About;
