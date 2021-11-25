import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from '../../components/common/axios';

import { capitalizeFirstLetter } from '../../components/common/utilFunctions';

const UserOrders = ({ user }) => {
	const [orderBy, setOrderBy] = useState('dateAscending');
	const [userOrders, setUserOrders] = useState([]);
	const [openList, setOpenList] = useState([]);

	useEffect(() => {
		axios.defaults.headers.common['Authorization'] = localStorage.getItem('FBIdToken');
		getUserOrders();
	}, [user]);

	const handleToggle = (orderId) => {
		console.log('toggling: ' + orderId);
		if (openList.includes(orderId)) {
			let arr = openList.filter((item) => item !== orderId);
			setOpenList(arr);
			console.log(openList);
		} else {
			setOpenList([...openList, orderId]);
			console.log(openList);
		}
	};

	const getUserOrders = async () => {
		try {
			let doc = await axios.get('/userorders');
			console.log(doc.data);
			setUserOrders(doc.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<h2>Orders</h2>

			<div className='userorder-item'>
				<div className='userorder-header'>
					<p
						style={{ flex: '2', cursor: 'pointer' }}
						onClick={() =>
							setOrderBy(orderBy === 'orderIdAscending' ? 'orderIdDescending' : 'orderIdAscending')
						}
					>
						Order #
						{/* {orderBy === 'orderIdAscending' && <i class='fas fa-angle-down' />}
						{orderBy === 'orderIdDescending' && <i class='fas fa-angle-up' />} */}
					</p>
					<p
						style={{ flex: '1.5', cursor: 'pointer' }}
						onClick={() =>
							setOrderBy(orderBy === 'dateAscending' ? 'dateDescending' : 'dateAscending')
						}
					>
						Date
						{/* {orderBy === 'dateAscending' && <i class='fas fa-angle-down' />}
						{orderBy === 'dateDescending' && <i class='fas fa-angle-up' />} */}
					</p>
					<p style={{ flex: '0.5' }}># of Items</p>
					<p>Type</p>
					<p>
						Total
						{/* {orderBy === 'totalAscending' && <i class='fas fa-angle-down' />}
						{orderBy === 'totalDescending' && <i class='fas fa-angle-up' />} */}
					</p>
				</div>
			</div>
			{userOrders.length > 0 &&
				userOrders.map((item, index) => {
					return (
						<div
							className={
								openList.includes(item.orderId)
									? 'userorder-item itemopen'
									: 'userorder-item closed'
							}
							key={index}
							onClick={() => handleToggle(item.orderId)}
						>
							<div className='userorder-header'>
								<p style={{ flex: '2' }}>{item.orderId}</p>
								<p style={{ flex: '1.5' }}>{item.createdAt.slice(0, 10)}</p>
								<p style={{ flex: '0.5' }}>{item.products.length}</p>
								<p>{capitalizeFirstLetter(item.status)}</p>
								<p>
									$
									{item.products
										.map((item) => item.price * item.count)
										.reduce((prev, curr) => prev + curr, 0)
										.toFixed(2)}
								</p>
							</div>
							{/* <div className='userorder-productlist'></div> */}
							{openList.includes(item.orderId) && <h3>Order Details</h3>}
							{userOrders.length > 0 &&
								openList.includes(item.orderId) &&
								item.products.map((product) => {
									return (
										<>
											<div className='userorder-product'>
												<img style={{ marginRight: '24px' }} src={product.imageUrl} alt=''></img>
												<p style={{ flex: '0.5' }}>x{product.count}</p>
												<p style={{ flex: '1.5' }}>{product.title}</p>
												<p style={{ flex: '0.5' }}>${product.price.toFixed(2)}</p>
											</div>
											<hr />
										</>
									);
								})}
						</div>
					);
				})}
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps)(UserOrders);
