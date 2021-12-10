import React from 'react';
import { useHistory } from 'react-router';

import macaronLibrary from '../../components/Data/macaronLibrary';

import './Macarons.scss';

const Macarons = () => {
	let history = useHistory();

	return (
		<>
			<div className='cover'>
				<img
					src='https://images.squarespace-cdn.com/content/v1/576c317f1b631b120f484f25/1543885964421-V939NHMHTOVGDK0EF09U/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_0105.jpg?format=2500w'
					className='banner'
					alt='Macarons'
				/>
				<h1 className='centered'>macarons.</h1>
			</div>

			<div className='build-panel'>
				<h3>CUSTOM MACARON BOXES</h3>
				<div className='build-panel-image'>
					<h4 className='inside-image' onClick={() => history.push('/macaron-builder')}>
						Build Your Box
					</h4>
					<img
						alt='Macaron Builder'
						src='https://firebasestorage.googleapis.com/v0/b/abella-bakery.appspot.com/o/macaron-builder-preview2.png?alt=media&token=79abc852-03ca-4ce2-b6ae-fd18dee44c4d'
					/>
				</div>
			</div>
			<div className='flavour-panel'>
				<h3>FLAVOURS</h3>
				<div className='flavour-list'>
					{macaronLibrary.map((item) => {
						return (
							<div className='flavour-item'>
								<img alt={item.title} src={item.image} />
								<h4>{item.title}</h4>
								<p>{item.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</>

		// <>
		// 	<div className='.macarons'>
		// 		<p style={{ fontSize: '16pt' }}>MACARONS</p>
		// 		<p>Our macarons are handcrafted with the best organic ingredients,</p>
		// 		<img src={image} alt='Macarons' className='.Image' />
		// 		<p>FLAVOURS</p>
		// 		<p>Explore our selection of macarons, and see what's inside</p>
		// 	</div>

		// 	<div className='.macaron-order'>
		// 		<MacaronFlavours />
		// 		<Button variant='outlined'>ORDER NOW</Button>
		// 		<Button variant='outlined'>BUILD YOUR MACARONS</Button>
		// 	</div>

		// 	<div>See our ingredients</div>
		// </>
	);
};

export default Macarons;
