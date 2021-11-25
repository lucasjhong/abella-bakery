import React, { useState } from 'react';
import Flavour from './Flavour/Flavour';
import './MacaronFlavours.scss';
import { macaronLibrary } from '../../components/Data/macaronLibrary';

const MacaronFlavours = () => {
	const [flavours, setFlavours] = useState(macaronLibrary);

	//let flavours = <p style={{textAlign: 'center'}}>Error occured</p>

	let flavourList;

	if (flavours) {
		flavourList = flavours.map((flavour) => {
			return (
				<Flavour
					key={flavour.id}
					title={flavour.title}
					image={flavour.image}
					description={flavour.description}
				/>
			);
		});
	}

	return (
		<React.Fragment>
			<div className='macaron-flavours'>{flavourList}</div>
		</React.Fragment>
	);
};

export default MacaronFlavours;
