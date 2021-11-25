import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './DropDown.scss';

const DropDown = (props) => {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	return (
		<>
			<ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
				{props.links.map((item, index) => {
					return (
						<li key={index}>
							<Link className='dropdown-link' to={item.path} onClick={() => setClick(false)}>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default DropDown;
