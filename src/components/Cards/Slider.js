import React, { useState } from 'react';

import Slide from './Slide';

import './Slider.scss';

const slides = [
	{
		index: 0,
		headline: 'Macaron Boxes',
		button: 'Customize Your Own',
		src:
			'https://images.unsplash.com/photo-1570476922354-81227cdbb76c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
		link: 'macaron-builder',
	},
	{
		index: 1,
		headline: 'Fresh Patisseries',
		button: 'See Desserts',
		// src:
		// 	'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		src:
			'https://images.unsplash.com/photo-1582957736254-8d05634f441a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
		link: 'menu',
	},
	{
		index: 2,
		headline: 'Special Occasion',
		button: 'See Cakes',
		src:
			'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
		link: 'menu/cake',
	},
	{
		index: 3,
		headline: 'Macaron Classes',
		button: 'See Details',
		src:
			'https://images.unsplash.com/photo-1519733870-f96bef9bc85f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		link: 'classes',
	},
	{
		index: 4,
		headline: 'Catering',
		button: 'Book Now',
		src:
			'https://images.unsplash.com/photo-1608449321328-070ec1a38e9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
		link: 'catering',
	},
	{
		index: 5,
		headline: 'Custom Order',
		button: 'Contact Us',
		src:
			'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		link: 'contact-us',
	},
];

const SliderControl = ({ type, title, handleClick }) => {
	return (
		<button className={`btn btn--${type}`} title={title} onClick={handleClick}>
			<svg className='icon' viewBox='0 0 24 24'>
				<path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
			</svg>
		</button>
	);
};

const Slider = () => {
	const [current, setCurrent] = useState(1);
	const [heading, setHeading] = useState('test test baby test');
	const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`;
	const wrapperTransform = {
		transform: `translateX(-${current * (100 / slides.length)}%)`,
	};

	const handlePreviousClick = () => {
		const previous = current - 1;

		setCurrent(previous < 0 ? slides.length - 1 : previous);
	};

	const handleNextClick = () => {
		const next = current + 1;

		setCurrent(next === slides.length ? 0 : next);
	};

	const handleSlideClick = (index) => {
		if (current !== index) setCurrent(index);
	};

	return (
		<div className='slider' aria-labelledby={headingId}>
			<ul className='slider__wrapper' style={wrapperTransform}>
				<h3 id={headingId} class='visuallyhidden'>
					{heading}
				</h3>

				{slides.map((slide) => {
					return (
						<Slide
							key={slide.index}
							slide={slide}
							current={current}
							handleSlideClick={handleSlideClick}
						/>
					);
				})}
			</ul>

			<div className='slider__controls'>
				<SliderControl
					type='previous'
					title='Go to previous slide'
					handleClick={handlePreviousClick}
				/>

				<SliderControl type='next' title='Go to next slide' handleClick={handleNextClick} />
			</div>
		</div>
	);
};

export default Slider;
