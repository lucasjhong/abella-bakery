import React from 'react';
import MacaronBuilder from '../../components/MacaronBuilder/MacaronBuilder';
import Reviews from '../../components/Reviews/Reviews';

// import Button from '@material-ui/core/Button';

import './BuildMacaron.css';

const BuildMacaron = () => {
	return (
		<>
			<div className='cover'>
				<img
					src='https://www.imperialsugar.com/sites/default/files/styles/recipe_image_node_full/public/recipe/Orange-Chocolate-Macarons-imperial.jpg?itok=bHmqHTvW'
					className='banner'
					alt='Macarons'
				/>
				<h1 className='centered'>macarons.</h1>
			</div>
			<div>
				<h3 style={{ textAlign: 'center', paddingTop: '20px' }}>Build your macaron box</h3>
				<MacaronBuilder />
				<Reviews productId='29999' />

				{/* <div className='buildmacaron-info'>
					<h3 style={{ textAlign: 'center' }}>Choose and build your own unique macaron box</h3>
					<div className='buildmacaron-info-panel'>
						<div className='buildmacaron-info-panel-item'>
							<i class='fas fa-truck' style={{ fontSize: '40px' }} />
							<p>alksdjflje lkajsdl jalkejlkjsldjfalksdjf ewlja lksdjlkfasjdlk jalkj aas</p>
						</div>
						<div className='buildmacaron-info-panel-item'>
							<i class='fas fa-truck' style={{ fontSize: '40px' }} />
							<p>alksdjflje lkajsdl jalkejlkjsldjfalksdjf ewlja lksdjlkfasjdlk jalkj aas</p>
						</div>
						<div className='buildmacaron-info-panel-item'>
							<i class='fas fa-truck' style={{ fontSize: '40px' }} />
							<p>alksdjflje lkajsdl jalkejlkjsldjfalksdjf ewlja lksdjlkfasjdlk jalkj aas</p>
						</div>
					</div>
				</div> */}
			</div>
		</>
	);
};

export default BuildMacaron;
