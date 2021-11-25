import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import icon from '../../image/icon.png';

import './NavBar.scss';
import DropDown from './DropDown';

const NavBar = ({ cart, user }) => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const [macaronDropdown, setMacaronDropdown] = useState(false);
	const [navbar, setNavbar] = useState(false);

	const handleMenuClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setMacaronDropdown(false);
		} else {
			setMacaronDropdown(true);
		}
	};

	const onMouseLeave = () => {
		setMacaronDropdown(false);
	};

	window.addEventListener('resize', showButton);

	const changeBackground = () => {
		if (window.scrollY >= 200) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener('scroll', changeBackground);

	const macaronMenuItems = [
		{
			title: 'Flavours',
			path: '/macaron-flavours',
		},
		{
			title: 'Build Your Macarons',
			path: '/macaron-builder',
		},
		{
			title: 'Bundle',
			path: '/menu/macaron',
		},
	];

	return (
		<>
			<nav className={navbar ? 'navbar active' : 'navbar'}>
				<div className='navbar-container'>
					<Link
						to='/'
						className={navbar ? 'navbar-logo' : 'navbar-logo active'}
						onClick={closeMobileMenu}
					>
						<h1>abella</h1>
						<img alt='Abella' src={icon} />
					</Link>
					<div className='menu-icon' onClick={handleMenuClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'} onClick={closeMobileMenu}>
						<li className='nav-item'>
							<Link
								to='/'
								className={navbar ? 'nav-links' : 'nav-links active'}
								onClick={closeMobileMenu}
							>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/menu'
								className={navbar ? 'nav-links' : 'nav-links active'}
								onClick={closeMobileMenu}
							>
								Menu
							</Link>
						</li>
						<li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
							<Link
								to='/macarons'
								className={navbar ? 'nav-links' : 'nav-links active'}
								onClick={closeMobileMenu}
							>
								Macarons
								{showButton && <i className='fas fa-caret-down' style={{ marginLeft: '8px' }} />}
							</Link>
							{macaronDropdown && <DropDown links={macaronMenuItems} />}
						</li>
						<li className='nav-item'>
							<Link
								to='/about'
								className={navbar ? 'nav-links' : 'nav-links active'}
								onClick={closeMobileMenu}
							>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/user' className={navbar ? 'nav-links' : 'nav-links active'}>
								<i
									class={
										user.authenticated ? 'fas fa-user authenticated' : 'fas fa-user unauthenticated'
									}
								/>
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/cart'
								className={navbar ? 'nav-links' : 'nav-links active'}
								onClick={closeMobileMenu}
							>
								<i
									className='fas fa-shopping-cart'
									style={{ fontSize: '1.2rem', marginBottom: '2px' }}
								/>
								<p
									style={{
										fontSize: '16px',
										width: '25px',
										height: '20px',
										marginLeft: '8px',
										fontWeight: '900',
									}}
								>
									{!cart.cartItems.isEmpty ? cart.cartItems.length : 0}
								</p>
							</Link>
						</li>
					</ul>
					{/* {button && <Button variant='contained'>Order Now</Button>} */}
					<div>
						<i className='fab fa-cart' />
					</div>
				</div>
			</nav>
		</>
	);
};

const mapStateToProps = (state) => {
	return { cart: state.cart, user: state.user };
};

export default connect(mapStateToProps)(NavBar);
