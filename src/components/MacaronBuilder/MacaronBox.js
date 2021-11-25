import React from 'react';

import './MacaronBox.css';

import { motion } from 'framer-motion';

// import { motion } from '';

// const macaronVariant = {
// 	whileHover: {{ y: -80 }}
// }

const MacaronBox = ({ boxSelection, macaronList, selectedMacaron, setMacaron, clearSelection }) => {
	// const calculateIsometricDistance = (width) => {
	// 	return { x: width, y: -Math.tan(60) * width };
	// };

	// const macaronVariant = {
	// 	active: {
	// 		transition: {},
	// 	},
	// };

	// const boxVariant = {
	// 	hidden: { opacity: 0.4 },
	// 	visible: { opacity: 1, x: 500, y: -288 },
	// };

	const handleMacaronClick = (num) => {
		if (num) {
			setMacaron(num);
		} else {
			clearSelection();
		}
	};

	return (
		<svg version='1.1' x='0px' y='0px' viewBox='150 -30 1200 1000'>
			<g id='Background'>
				<rect
					class='background'
					width='2000'
					height='2000'
					onClick={() => {
						handleMacaronClick();
					}}
				/>
			</g>
			{boxSelection === 'ten' ? (
				<motion.g
					id='OuterBoxBottom'
					initial={{ opacity: 1 }}
					animate={{ x: 500, y: -288, opacity: 0.2 }}
					transition={{ ease: 'easeOut', duration: 1 }}
				>
					<polygon class='st0' points='541.29,600.27 541.29,750.27 238.18,575.27 368.08,500.27' />
					<polygon class='st1' points='238.18,425.27 368.08,500.27 238.18,575.27' />
					<polygon class='st0' points='801.1,400.27 541.29,550.27 411.39,475.27 671.19,325.27' />
					<polygon class='st1' points='671.19,225.27 671.19,325.27 411.39,475.27 324.78,425.27' />
				</motion.g>
			) : (
				<motion.g
					id='OuterBoxBottom'
					initial={{ opacity: 1 }}
					animate={{ x: 500, y: -288, opacity: 0.2 }}
					transition={{ ease: 'easeOut', duration: 1 }}
				>
					<polygon class='st0' points='541.29,600.27 541.29,750.27 377.35,655.62 507.25,580.62 		' />
					<polygon class='st1' points='377.35,505.62 507.25,580.62 377.35,655.62 		' />
					<polygon class='st1' points='810.36,305.62 810.36,394.93 541.29,550.27 463.95,505.62 	' />
					<path class='st2' d='M576.3,570.48' />
				</motion.g>
			)}

			{boxSelection === 'ten' ? (
				<g id='BoxBackground'>
					<polygon class='st2' points='974.3,350.27 974.3,500.27 541.29,750.27 541.29,600.27' />
					<path
						class='st3'
						d='M974.3,350.27l-433.01,250l-303.11-175l433.01-250L974.3,350.27z M822.75,412.77L931,350.27l-259.81-150
				l-389.71,225l108.25,62.5l151.56,87.5L822.75,412.77z'
					/>
					<polygon class='st2' points='931,350.27 822.75,412.77 671.19,325.27 671.19,200.27' />
					<polygon class='st3' points='822.75,412.77 541.29,575.27 389.73,487.77 671.19,325.27' />
					<polygon class='st1' points='671.19,200.27 671.19,325.27 389.73,487.77 281.48,425.27' />
					<polygon class='st1' points='541.29,600.27 541.29,750.27 238.18,575.27 238.18,425.27' />
				</g>
			) : (
				<g id='BoxBackground'>
					<polygon class='st2' points='974.3,350.27 974.3,500.27 541.29,750.27 541.29,600.27' />
					<path
						class='st3'
						d='M974.3,350.27l-433.01,250l-163.94-94.65l433.01-250L974.3,350.27z M541.29,575.27l281.46-162.5L931,350.27
		l-120.64-69.65l-389.71,225'
					/>
					<polygon class='st2' points='931,350.27 822.75,412.77 810.36,405.62 810.36,280.62' />
					<polygon class='st3' points='822.75,412.77 541.29,575.27 528.9,568.12 810.36,405.62' />
					<polygon class='st1' points='810.36,280.62 810.36,405.62 528.9,568.12 420.65,505.62' />
					<polygon class='st1' points='541.29,600.27 541.29,750.27 377.35,655.62 377.35,505.62' />
				</g>
			)}

			<g id='Macarons'>
				{boxSelection === 'ten' && (
					<motion.g id='TopRow' initial={{ y: 80 }}>
						<motion.g
							id='9'
							animate={selectedMacaron === '9' ? { y: -80 } : { y: 0 }}
							whileHover={{ y: -80 }}
							onClick={() => handleMacaronClick('9')}
						>
							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -66.3302 392.5762)'
								class={macaronList[9].top}
								cx='699.39'
								cy='320.06'
								rx='68.42'
								ry='89.5'
							/>

							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -66.3302 392.5762)'
								class='shadow'
								cx='699.39'
								cy='320.06'
								rx='68.42'
								ry='89.5'
							/>
							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -70.5275 388.3789)'
								class={macaronList[9].filling}
								cx='689.46'
								cy='325.8'
								rx='68.42'
								ry='89.5'
							/>

							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -77.8028 381.1037)'
								class={macaronList[9].bottom}
								cx='672.25'
								cy='335.73'
								rx='68.42'
								ry='89.5'
							/>
							<path
								class='shadow'
								d='M707.93,417.37c3.12-1.08,6.15-2.45,9.07-4.13c32.73-18.89,39.22-68.91,14.5-111.72s-71.28-62.19-104-43.3
					c-2.93,1.69-5.63,3.64-8.14,5.8c31.79-11.08,72.41,8.47,94.92,47.45c22.51,38.98,19.12,83.93-6.37,105.92'
							/>
						</motion.g>
						<motion.g
							animate={selectedMacaron === '8' ? { y: -80 } : { y: 0 }}
							whileHover={{ y: -80 }}
							onClick={() => handleMacaronClick('8')}
						>
							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -95.6123 363.2942)'
								class={macaronList[8].top}
								cx='630.11'
								cy='360.06'
								rx='68.42'
								ry='89.5'
							/>

							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -95.6123 363.2942)'
								class='shadow'
								cx='630.11'
								cy='360.06'
								rx='68.42'
								ry='89.5'
							/>

							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -99.8095 359.0969)'
								// was testing shadowfilling to make fillings darker
								class={` ${macaronList[8].filling}`}
								cx='620.18'
								cy='365.8'
								rx='68.42'
								ry='89.5'
							/>

							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -107.0848 351.8216)'
								class={macaronList[8].bottom}
								cx='602.96'
								cy='375.73'
								rx='68.42'
								ry='89.5'
							/>
							<path
								class='shadow'
								d='M638.65,457.37c3.12-1.08,6.15-2.45,9.07-4.13c32.73-18.89,39.22-68.91,14.5-111.72s-71.28-62.19-104-43.3
					c-2.93,1.69-5.63,3.64-8.14,5.8c31.79-11.08,72.41,8.47,94.92,47.45c22.51,38.98,19.12,83.93-6.37,105.92'
							/>
						</motion.g>
						<motion.g
							animate={selectedMacaron === '7' ? { y: -80 } : { y: 0 }}
							whileHover={{ y: -80 }}
							onClick={() => handleMacaronClick('7')}
						>
							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -124.8943 334.0121)'
								class={macaronList[7].top}
								cx='560.83'
								cy='400.06'
								rx='68.42'
								ry='89.5'
							/>

							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -124.8943 334.0121)'
								class='shadow'
								cx='560.83'
								cy='400.06'
								rx='68.42'
								ry='89.5'
							/>
							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -129.0916 329.8148)'
								class={macaronList[7].filling}
								cx='550.9'
								cy='405.8'
								rx='68.42'
								ry='89.5'
							/>

							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -136.3669 322.5396)'
								class={macaronList[7].bottom}
								cx='533.68'
								cy='415.73'
								rx='68.42'
								ry='89.5'
							/>
							<path
								class='shadow'
								d='M569.36,497.37c3.12-1.08,6.15-2.45,9.07-4.13c32.73-18.89,39.22-68.91,14.5-111.72s-71.28-62.19-104-43.3
					c-2.93,1.69-5.63,3.64-8.14,5.8c31.79-11.08,72.41,8.47,94.92,47.45c22.51,38.98,19.12,83.93-6.37,105.92'
							/>
						</motion.g>
						<motion.g
							animate={selectedMacaron === '6' ? { y: -80 } : { y: 0 }}
							whileHover={{ y: -80 }}
							onClick={() => handleMacaronClick('6')}
						>
							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -154.1764 304.7301)'
								class={macaronList[6].top}
								cx='491.55'
								cy='440.06'
								rx='68.42'
								ry='89.5'
							/>

							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -154.1764 304.7301)'
								class='shadow'
								cx='491.55'
								cy='440.06'
								rx='68.42'
								ry='89.5'
							/>

							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -158.3737 300.5328)'
								class={macaronList[6].filling}
								cx='481.61'
								cy='445.8'
								rx='68.42'
								ry='89.5'
							/>
							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -165.649 293.2575)'
								class={macaronList[6].bottom}
								cx='464.4'
								cy='455.73'
								rx='68.42'
								ry='89.5'
							/>
							<path
								class='shadow'
								d='M500.08,537.37c3.12-1.08,6.15-2.45,9.07-4.13c32.73-18.89,39.22-68.91,14.5-111.72
					c-24.71-42.81-71.28-62.19-104-43.3c-2.93,1.69-5.63,3.64-8.14,5.8c31.79-11.08,72.41,8.47,94.92,47.45
					c22.51,38.98,19.12,83.93-6.37,105.92'
							/>
						</motion.g>
						<motion.g
							animate={selectedMacaron === '5' ? { y: -80 } : { y: 0 }}
							whileHover={{ y: -80 }}
							onClick={() => handleMacaronClick('5')}
						>
							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -183.4585 275.448)'
								class={macaronList[5].top}
								cx='422.26'
								cy='480.06'
								rx='68.42'
								ry='89.5'
							/>

							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -183.4585 275.448)'
								class='shadow'
								cx='422.26'
								cy='480.06'
								rx='68.42'
								ry='89.5'
							/>

							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -187.6557 271.2507)'
								class={macaronList[5].filling}
								cx='412.33'
								cy='485.8'
								rx='68.42'
								ry='89.5'
							/>

							<ellipse
								transform='matrix(0.866 -0.5 0.5 0.866 -194.931 263.9754)'
								class={macaronList[5].bottom}
								cx='395.12'
								cy='495.73'
								rx='68.42'
								ry='89.5'
							/>
							<path
								class='shadow'
								d='M430.8,577.37c3.12-1.08,6.15-2.45,9.07-4.13c32.73-18.89,39.22-68.91,14.5-111.72s-71.28-62.19-104-43.3
					c-2.93,1.69-5.63,3.64-8.14,5.8c31.79-11.08,72.41,8.47,94.92,47.45c22.51,38.98,19.12,83.93-6.37,105.92'
							/>
						</motion.g>
					</motion.g>
				)}

				<g>
					<motion.g
						animate={selectedMacaron === '4' ? { y: -80 } : { y: 0 }}
						whileHover={{ y: -80 }}
						onClick={() => handleMacaronClick('4')}
					>
						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -86.4264 467.5763)'
							class={macaronList[4].top}
							cx='829.3'
							cy='395.06'
							rx='68.42'
							ry='89.5'
						/>
						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -86.4264 467.5763)'
							class='shadow'
							cx='829.3'
							cy='395.06'
							rx='68.42'
							ry='89.5'
						/>
						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -90.6237 463.379)'
							class={macaronList[4].filling}
							cx='819.36'
							cy='400.8'
							rx='68.42'
							ry='89.5'
						/>

						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -97.8989 456.1038)'
							class={macaronList[4].bottom}
							cx='802.15'
							cy='410.73'
							rx='68.42'
							ry='89.5'
						/>
						<path
							class='shadow'
							d='M837.83,492.37c3.12-1.08,6.15-2.45,9.07-4.13c32.73-18.89,39.22-68.91,14.5-111.72s-71.28-62.19-104-43.3
					c-2.93,1.69-5.63,3.64-8.14,5.8c31.79-11.08,72.41,8.47,94.92,47.45c22.51,38.98,19.12,83.93-6.37,105.92'
						/>
					</motion.g>
					<motion.g
						animate={selectedMacaron === '3' ? { y: -80 } : { y: 0 }}
						whileHover={{ y: -80 }}
						onClick={() => handleMacaronClick('3')}
					>
						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -115.7084 438.2943)'
							class={macaronList[3].top}
							cx='760.01'
							cy='435.06'
							rx='68.42'
							ry='89.5'
						/>

						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -115.7084 438.2943)'
							class='shadow'
							cx='760.01'
							cy='435.06'
							rx='68.42'
							ry='89.5'
						/>
						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -119.9057 434.097)'
							class={macaronList[3].filling}
							cx='750.08'
							cy='440.8'
							rx='68.42'
							ry='89.5'
						/>

						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -127.181 426.8217)'
							class={macaronList[3].bottom}
							cx='732.87'
							cy='450.73'
							rx='68.42'
							ry='89.5'
						/>
						<path
							class='shadow'
							d='M768.55,532.37c3.12-1.08,6.15-2.45,9.07-4.13c32.73-18.89,39.22-68.91,14.5-111.72s-71.28-62.19-104-43.3
					c-2.93,1.69-5.63,3.64-8.14,5.8c31.79-11.08,72.41,8.47,94.92,47.45c22.51,38.98,19.12,83.93-6.37,105.92'
						/>
					</motion.g>
					<motion.g
						animate={selectedMacaron === '2' ? { y: -80 } : { y: 0 }}
						whileHover={{ y: -80 }}
						onClick={() => handleMacaronClick('2')}
					>
						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -144.9905 409.0122)'
							class={macaronList[2].top}
							cx='690.73'
							cy='475.06'
							rx='68.42'
							ry='89.5'
						/>

						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -144.9905 409.0122)'
							class='shadow'
							cx='690.73'
							cy='475.06'
							rx='68.42'
							ry='89.5'
						/>
						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -149.1878 404.8149)'
							class={macaronList[2].filling}
							cx='680.8'
							cy='480.8'
							rx='68.42'
							ry='89.5'
						/>

						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -156.4631 397.5396)'
							class={macaronList[2].bottom}
							cx='663.59'
							cy='490.73'
							rx='68.42'
							ry='89.5'
						/>
						<path
							class='shadow'
							d='M699.27,572.37c3.12-1.08,6.15-2.45,9.07-4.13c32.73-18.89,39.22-68.91,14.5-111.72s-71.28-62.19-104-43.3
					c-2.93,1.69-5.63,3.64-8.14,5.8c31.79-11.08,72.41,8.47,94.92,47.45c22.51,38.98,19.12,83.93-6.37,105.92'
						/>
					</motion.g>
					<motion.g
						animate={selectedMacaron === '1' ? { y: -80 } : { y: 0 }}
						whileHover={{ y: -80 }}
						onClick={() => handleMacaronClick('1')}
					>
						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -174.2726 379.7302)'
							class={macaronList[1].bottom}
							cx='621.45'
							cy='515.06'
							rx='68.42'
							ry='89.5'
						/>

						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -174.2726 379.7302)'
							class='shadow'
							cx='621.45'
							cy='515.06'
							rx='68.42'
							ry='89.5'
						/>

						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -178.4699 375.5329)'
							class={macaronList[1].filling}
							cx='611.52'
							cy='520.8'
							rx='68.42'
							ry='89.5'
						/>

						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -185.7451 368.2576)'
							class={macaronList[1].bottom}
							cx='594.3'
							cy='530.73'
							rx='68.42'
							ry='89.5'
						/>
						<path
							class='shadow'
							d='M629.99,612.37c3.12-1.08,6.15-2.45,9.07-4.13c32.73-18.89,39.22-68.91,14.5-111.72s-71.28-62.19-104-43.3
					c-2.93,1.69-5.63,3.64-8.14,5.8c31.79-11.08,72.41,8.47,94.92,47.45c22.51,38.98,19.12,83.93-6.37,105.92'
						/>
					</motion.g>
					<motion.g
						animate={selectedMacaron === '0' ? { y: -80 } : { y: 0 }}
						whileHover={{ y: -80 }}
						onClick={() => handleMacaronClick('0')}
					>
						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -203.5547 350.4481)'
							class={macaronList[0].top}
							cx='552.17'
							cy='555.06'
							rx='68.42'
							ry='89.5'
						/>

						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -203.5547 350.4481)'
							class='shadow'
							cx='552.17'
							cy='555.06'
							rx='68.42'
							ry='89.5'
						/>

						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -207.7519 346.2508)'
							class={macaronList[0].filling}
							cx='542.24'
							cy='560.8'
							rx='68.42'
							ry='89.5'
						/>

						<ellipse
							transform='matrix(0.866 -0.5 0.5 0.866 -215.0272 338.9755)'
							class={macaronList[0].bottom}
							cx='525.02'
							cy='570.73'
							rx='68.42'
							ry='89.5'
						/>
						<path
							class='shadow'
							d='M560.7,652.37c3.12-1.08,6.15-2.45,9.07-4.13c32.73-18.89,39.22-68.91,14.5-111.72s-71.28-62.19-104-43.3
					c-2.93,1.69-5.63,3.64-8.14,5.8c31.79-11.08,72.41,8.47,94.92,47.45c22.51,38.98,19.12,83.93-6.37,105.92'
						/>
					</motion.g>
				</g>
			</g>
			{boxSelection === 'ten' ? (
				<motion.g id='BoxFront'>
					<polygon class='st1' points='974.3,350.27 974.3,500.27 541.29,750.27 541.29,600.27' />
					<polygon
						class='st3'
						points='974.3,350.27 541.29,600.27 238.18,425.27 259.83,412.77 541.29,575.27 952.65,337.77'
					/>
					<polygon class='st2' points='541.29,600.27 541.29,750.27 238.18,575.27 238.18,425.27' />
				</motion.g>
			) : (
				<g id='BoxFront'>
					<polygon class='st1' points='974.3,350.27 974.3,500.27 541.29,750.27 541.29,600.27' />
					<polygon
						class='st3'
						points='399,493.12 377.35,505.62 541.29,600.27 974.3,350.27 952.65,337.77 541.3,575.27'
					/>
					<polygon class='st2' points='541.29,600.27 541.29,750.27 377.35,655.62 377.35,505.62' />
				</g>
			)}

			{boxSelection === 'ten' ? (
				<motion.g
					id='OuterBox'
					initial={{ opacity: 1 }}
					animate={{ x: 500, y: -288 }}
					transition={{ ease: 'easeOut', duration: 1 }}
				>
					<polygon class='st1' points='974.3,350.27 974.3,500.27 541.29,750.27 541.29,600.27' />
					<path
						class='st3'
						d='M974.3,350.27l-433.01,250l-173.21-100l-129.9-75l433.01-250L974.3,350.27z M801.1,400.27l86.6-50
				l-216.51-125l-346.41,200l86.61,50l129.9,75L801.1,400.27z'
					/>
					<polygon class='st9' points='671.2,225.27 887.7,350.27 541.29,550.27 324.79,425.27' />
				</motion.g>
			) : (
				<motion.g
					id='OuterBox'
					initial={{ opacity: 1 }}
					animate={{ x: 500, y: -288 }}
					transition={{ ease: 'easeOut', duration: 1 }}
				>
					<polygon class='st1' points='974.3,350.27 974.3,500.27 541.29,750.27 541.29,600.27 	' />
					<path
						class='st3'
						d='M810.36,255.62l163.94,94.65l-433.01,250l-163.94-94.65L810.36,255.62z M541.29,550.27l259.81-150l86.6-50
		l-77.34-44.65l-346.41,200L541.29,550.27z'
					/>
					<polygon class='st9' points='810.36,305.62 887.7,350.27 541.29,550.27 463.95,505.62 	' />
				</motion.g>
			)}
		</svg>
	);
};

export default MacaronBox;
