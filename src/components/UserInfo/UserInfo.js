import React, { useState } from 'react';
import './UserInfo.scss';

import UserOverview from './UserOverview';
import UserReviews from './UserReviews';
import UserOrders from './UserOrders';
import UserFavourites from './UserFavourites';

const UserInfo = (props) => {
	const [userMenu, setUserMenu] = useState('favourites');
	// const menuItems = ['overview', 'orders', 'favourites', 'reviews'];

	return (
		<div className='user-info'>
			<div className='user-info-menu'>
				{/* {menuItems.map((item) => {
					return (
						<h4
							className={userMenu === item ? 'item active' : 'item'}
							onClick={() => setUserMenu(item)}
						>
							{capitalizeFirstLetter(item)}
						</h4>
					);
				})} */}
				{/* <h4
					className={userMenu === 'overview' ? 'item active' : 'item'}
					onClick={() => setUserMenu('overview')}
				>
					<i class='fas fa-th-large' /> Overview
				</h4> */}

				<h4
					className={userMenu === 'favourites' ? 'item active' : 'item'}
					onClick={() => setUserMenu('favourites')}
				>
					<i class='fas fa-heart' /> Favourites
				</h4>
				<h4
					className={userMenu === 'orders' ? 'item active' : 'item'}
					onClick={() => setUserMenu('orders')}
				>
					<i class='fas fa-shopping-bag' /> Orders
				</h4>
				<h4
					className={userMenu === 'reviews' ? 'item active' : 'item'}
					onClick={() => setUserMenu('reviews')}
				>
					<i class='fas fa-comment' /> Reviews
				</h4>
			</div>
			<div className='user-info-panel'>
				{userMenu === 'overview' && <UserOverview />}
				{userMenu === 'orders' && <UserOrders />}
				{userMenu === 'favourites' && <UserFavourites />}
				{userMenu === 'reviews' && <UserReviews />}
			</div>
		</div>
	);
};

export default UserInfo;
