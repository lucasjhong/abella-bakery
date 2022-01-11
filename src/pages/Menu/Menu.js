import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CircularProgress, Button } from '@mui/material';

import axios from 'axios';

import MenuItem from '../../components/MenuItem/MenuItem';
import './Menu.scss';

const Menu = () => {
	const [items, setItems] = useState([]);
	const [filter, setFilter] = useState(['all']);
	const filterId = useParams().filter;

	const filterStyle = (category) => ({
		borderRadius: '0px',
		width: '100px',
		backgroundColor: filter.includes(category) ? '#efbbcf' : null,
		color: filter.includes(category) ? '#ffffff' : null,
	});

	const setMenu = async () => {
		try {
			let data = await axios
				.get('https://us-central1-abella-bakery.cloudfunctions.net/api/products')
				.then((result) => {
					return result.data;
				});
			setItems(data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleFilterChange = (category) => {
		var newFilter = [];
		newFilter.push(category);
		setFilter(newFilter);
	};

	useEffect(() => {
		setMenu();
	}, []);

	useEffect(() => {
		switch (filterId) {
			case 'cake':
				handleFilterChange('cake');
				break;

			case 'macaron':
				handleFilterChange('macaron');
				break;

			case 'dessert':
				handleFilterChange('dessert');
				break;

			default:
				handleFilterChange('all');
		}
	}, [filterId]);

	return (
		<>
			<div className='cover'>
				<img
					src='https://now-forager.com/wp-content/uploads/2015/03/B-Patisserie-Now-Forager-Teresa-Floyd-Photography.jpg'
					className='banner'
					alt='Macarons'
				/>
				<h1 className='centered'>collection.</h1>
			</div>
			<div className='menu-overall'>
				<h2>MENU</h2>
				<ul className='filter-list'>
					<Button
						style={filterStyle('all')}
						variant={filter.includes('all') ? 'contained' : null}
						onClick={() => handleFilterChange('all')}
					>
						ALL
					</Button>
					<div className='filter-sublist'>
						<Button
							style={filterStyle('cake')}
							variant={filter.includes('cake') ? 'contained' : null}
							onClick={() => handleFilterChange('cake')}
						>
							CAKE
						</Button>
						<Button
							style={filterStyle('macaron')}
							variant={filter.includes('macaron') ? 'contained' : null}
							onClick={() => handleFilterChange('macaron')}
						>
							MACARON
						</Button>
						<Button
							style={filterStyle('dessert')}
							variant={filter.includes('dessert') ? 'contained' : null}
							onClick={() => handleFilterChange('dessert')}
						>
							DESSERT
						</Button>
						<Button
							style={filterStyle('misc')}
							variant={filter.includes('misc') ? 'contained' : null}
							onClick={() => handleFilterChange('misc')}
						>
							MISC
						</Button>
					</div>
				</ul>
				<ul className='menu-list'>
					{items.length < 1 && <CircularProgress />}
					{/* <p>{JSON.stringify(items)}</p> */}
					{items.length !== 0 &&
						items.map((item) => {
							if (filter.includes('all') || filter.includes(item.category))
								return (
									<MenuItem
										key={item.id}
										productId={item.productId}
										title={item.title}
										category={item.category}
										description={item.description}
										price={item.price}
										imageUrl={item.imageUrl}
									/>
								);
						})}
				</ul>
			</div>
		</>
	);
};

export default Menu;
