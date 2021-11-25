import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

const Cards = () => {
	return (
		<div className='cards'>
			<h1>Sample text Sample text Sample text Sample text</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='https://cdn.shopify.com/s/files/1/1469/6430/products/Hero-Shot-Macarons-600x600_2ad85ab1-7b17-4bd7-916f-867aa3995c6d_grande.jpg?v=1476823684'
							text='Explore our macaronsadsfasdfasdfasdfasdfadsfadsf'
							label='Adventure'
							path='/macarons'
						/>
						<CardItem
							src='https://thebakersalmanac.com/wp-content/uploads/2020/06/Earl-Grey-Macarons-Recipe-Image.jpg'
							text='Explore our macaronsadsfasdfasdfasdfasdfadsfadsf'
							label='Macarons'
							path='/macarons'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Cards;

// import React from 'react';
// import './Cards.css';
// import CardItem from './CardItem';

// function Cards() {
// 	return (
// 		<div className='cards'>
// 			<h1>Check out these EPIC Destinations!</h1>
// 			<div className='cards__container'>
// 				<div className='cards__wrapper'>
// 					<ul className='cards__items'>
// 						<CardItem
// 							src='https://cdn.shopify.com/s/files/1/1469/6430/products/Hero-Shot-Macarons-600x600_2ad85ab1-7b17-4bd7-916f-867aa3995c6d_grande.jpg?v=1476823684'
// 							text='Explore the hidden waterfall deep inside the Amazon Jungle'
// 							label='Adventure'
// 							path='/services'
// 						/>
// 						<CardItem
// 							src='https://cdn.shopify.com/s/files/1/1469/6430/products/Hero-Shot-Macarons-600x600_2ad85ab1-7b17-4bd7-916f-867aa3995c6d_grande.jpg?v=1476823684'
// 							text='Travel through the Islands of Bali in a Private Cruise'
// 							label='Luxury'
// 							path='/services'
// 						/>
// 					</ul>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Cards;
