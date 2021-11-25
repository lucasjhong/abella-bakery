import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
	const [subscriptionEmail, setSubscriptionEmail] = useState('temp');

	const subscribeButtonHandler = (event) => {
		event.preventDefault();
		console.log(subscriptionEmail);
	};

	return (
		<div className='footer-container'>
			<section className='footer-subscription'>
				<p className='footer-subscription-heading'>
					Join our newsletter and receive exclusive deals and offers
				</p>
				<p className='gooter-subscription-text'>Sample text Sample text Sample text Sample text</p>
				<div className='input-areas'>
					<form onSubmit={subscribeButtonHandler}>
						<input type='email' name='email' placeholder='Your Email' className='footer-input' />
						<Button variant='contained' type='submit' disabled={!subscriptionEmail}>
							Join
						</Button>
					</form>
				</div>
			</section>

			<div className='footer-links'>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>Menu</h2>
						<Link to='/menu/cake'>Cake</Link>
						<Link to='/menu/macaron'>Macaron</Link>
						<Link to='/menu/dessert'>Dessert</Link>
					</div>
					<div className='footer-link-items'>
						<h2>Macarons</h2>
						<Link to='/macaron-builder'>Macaron Builder</Link>
						<Link to='/macarons'>Flavours</Link>
					</div>

					<div className='footer-link-items'>
						<h2>About Us</h2>
						<Link to='/macarons'>Our Story</Link>
					</div>
					<div className='footer-link-items'>
						<h2>Support</h2>
						<Link to='/macarons'>Contact Us</Link>
					</div>
				</div>
			</div>

			<section className='social-media'>
				<div className='social-media-wrap'>
					<div className='footer-logo'>
						<Link className='social-logo'>abella</Link>
					</div>
					<small className='website-rights'>Abella Bakery 2021</small>
					<div className='social-icons'>
						<Link className='social-icon-link facebook'>
							<i className='fab fa-facebook-f' />
						</Link>
						<Link className='social-icon-link instagram'>
							<i className='fab fa-instagram' />
						</Link>
						<Link className='social-icon-link youtube'>
							<i className='fab fa-youtube' />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Footer;
