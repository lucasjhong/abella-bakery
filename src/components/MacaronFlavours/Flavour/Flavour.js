import React from 'react';
import './flavour.scss';

const Flavour = (props) => {
	return (
		<div className='macaron-flavour'>
			<img src={props.image} alt='' height='120' />
			<div className='macaron-description'>
				<p style={{ color: 'salmon', fontSize: '14px' }}>{props.title}</p>
				<p style={{ color: 'grey' }}>{props.description}</p>
			</div>
		</div>
	);
};

export default Flavour;
