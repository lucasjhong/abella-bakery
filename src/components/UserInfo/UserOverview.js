import React from 'react';

const UserOverview = () => {
	const rewardPoints = 400;

	return (
		<div>
			<h2>Overview</h2>
			<div>
				<h3>Your Reward Points</h3>
				<p>{rewardPoints}pts</p>
			</div>
			<div>
				<h3>Your Most Recent Order</h3>
			</div>
		</div>
	);
};

export default UserOverview;
