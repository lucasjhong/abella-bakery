import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuItem from '../MenuItem';

Enzyme.configure({ adapter: new Adapter() });

it('title should match prop', () => {
	const menuItem = shallow(
		<MenuItem
			productId='00301'
			title='Chocolate Hazelnut'
			category='Cake'
			description='delicious cake'
			price='40'
			imageUrl='https://firebasestorage.googleapis.com/v0/b/abella-bakery.appspot.com/o/cake%2FChocolate%20Hazelnut.jpg?alt=media&token=429494b5-a360-444a-9baa-e4cc443d7a8d'
		/>
	);

	const title = menuItem.find('h5 h5');
	expect(title.text()).toBe('Chocolate Hazelnut');
});
