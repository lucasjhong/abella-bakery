import React from 'react';

import './Modal.css';

const Modal = ({ children, handleClose }) => {
	return (
		<div className='modal-background'>
			<section className='modal-main'>
				{children}
				<button onClick={handleClose}>close</button>
			</section>
		</div>
	);
};

export default Modal;
