import React from 'react';
// import SimpleBar from 'simplebar-react'; SHOULD DELETE THIS PACAKGE
import { Scrollbars } from 'react-custom-scrollbars';

import './SelectionWindow.scss';
import macaronLibrary from '../Data/macaronLibrary';

const SelectionWindow = (props) => {
	const { handleFlavourSelection, macaronList, selectedMacaron } = props;

	return (
		<Scrollbars style={{ border: '1px solid rgba(150, 150, 150, 0.5)', borderRadius: '20px' }}>
			<div className='selection-palette'>
				{macaronLibrary.map((macaron, index) => {
					return (
						<div
							key={index}
							className={`flavour ${
								selectedMacaron && macaronList[selectedMacaron].flavour === macaron.flavour
									? 'selection'
									: null
							}`}
							onClick={() => handleFlavourSelection(macaron.flavour)}
						>
							<img src={macaron.image} alt={`${macaron.title}`} />
							<div className='description'>
								<p style={{ fontSize: '13px' }}>{macaron.title}</p>
							</div>
						</div>
					);
				})}
			</div>
		</Scrollbars>
	);
};

export default SelectionWindow;
