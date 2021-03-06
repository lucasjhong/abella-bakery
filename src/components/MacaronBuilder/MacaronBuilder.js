import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button, Modal } from '@mui/material';
import MacaronBox from './MacaronBox';
import SelectionWindow from './SelectionWindow';
import { ADD_ITEM, GET_TOTAL } from '../../components/reducers/action';
import './MacaronBuilderColors.scss';
import './MacaronBuilder.scss';

import macaronLibrary from '../Data/macaronLibrary';

toast.configure();

const MacaronBuilder = ({ dispatch }) => {
	const [boxSelection, setBoxSelection] = useState('five');
	const [selectedMacaron, setSelectedMacaron] = useState();
	const [boxId, setBoxId] = useState();
	const [modal, setModal] = useState();
	const [modalMessage, setModalMessage] = useState();

	const [selectionWindow, setSelectionWindow] = useState(false);
	const [selectedSegment, setSelectedSegment] = useState();
	const [macaronList, setMacaronList] = useState([
		{ flavour: 'pistachio', top: 'green', filling: 'pistachio', bottom: 'green' },
		{ flavour: 'pistachio', top: 'green', filling: 'pistachio', bottom: 'green' },
		{ flavour: 'pistachio', top: 'green', filling: 'pistachio', bottom: 'green' },
		{ flavour: 'pistachio', top: 'green', filling: 'pistachio', bottom: 'green' },
		{ flavour: 'pistachio', top: 'green', filling: 'pistachio', bottom: 'green' },
		{ flavour: 'pistachio', top: 'green', filling: 'pistachio', bottom: 'green' },
		{ flavour: 'pistachio', top: 'green', filling: 'pistachio', bottom: 'green' },
		{ flavour: 'pistachio', top: 'green', filling: 'pistachio', bottom: 'green' },
		{ flavour: 'pistachio', top: 'green', filling: 'pistachio', bottom: 'green' },
		{ flavour: 'pistachio', top: 'green', filling: 'pistachio', bottom: 'green' },
	]);

	const macaronId = useParams().id;

	const toastNotify = (type, message) => {
		switch (type) {
			case 'success':
				return toast.success(message, {
					position: toast.POSITION.BOTTOM_LEFT,
				});
			case 'added':
				return toast.info(message, { position: toast.POSITION.BOTTOM_LEFT });
			case 'error':
				return toast.error(message, { position: toast.POSITION.BOTTOM_LEFT });

			default:
				return null;
		}
	};

	// Changing the flavour of the seleted macaron based on user's selection.
	// Looks up the passed flavour parameter then looks it up through the
	const changeMacaronFlavour = (newFlavour, number) => {
		if (selectedMacaron || number) {
			let newList = [...macaronList];
			let newItem = { ...newList[number ? number : selectedMacaron] };
			let newMacaron;
			// Setting the type of macaron build to 'custom'
			if (newFlavour === 'custom') {
				// Handles macaron type switch to custom. Properties stay the same
				newItem.flavour = 'custom';
			} else if (newFlavour === 'flavour') {
				// Handles macaron type switch to flavour. Properties stay the same
				newItem.flavour = 'flavour';
			} else {
				// Handles flavour change, looks up flavour information and matches currently selected macaron to the fetched one
				newMacaron = macaronLibrary.find((obj) => {
					return obj.flavour === newFlavour;
				});
				console.log(newMacaron);
				console.log(number);
				newItem.flavour = newMacaron.flavour;
				newItem.top = newMacaron.top;
				newItem.filling = newMacaron.flavour;
				newItem.bottom = newMacaron.bottom;
			}
			newList[number ? number : selectedMacaron] = newItem;
			setMacaronList(newList);
		} else {
			console.log('changeMacaronFlavour: macaron not selected');
		}
	};

	const handleBoxSelection = (event, newValue) => {
		setBoxSelection(newValue);
	};

	const handleFlavourSelection = (flavourSelected) => {
		console.log(flavourSelected + ' selected');
		changeMacaronFlavour(flavourSelected);
		handleSelectorSelection();
	};

	const handleSegmentSelection = (segment) => {
		if (selectedSegment === segment) {
			setSelectionWindow(false);
			setSelectedSegment();
		} else {
			setSelectionWindow(true);
			setSelectedSegment(segment);
		}

		console.log('handleSegmentSelection clicked');
	};

	const handleSelectorSelection = (event) => {
		setSelectionWindow(false);
		setSelectedSegment();
	};

	const clearSelection = () => {
		setSelectionWindow(false);
		setSelectedSegment();
		setSelectedMacaron();
	};

	const randomizeMacarons = () => {
		let newMacaron;
		let newList = [...macaronList];
		setMacaronList(newList);

		for (var i = 0; i < newList.length; i++) {
			newMacaron = macaronLibrary[Math.floor(Math.random() * macaronLibrary.length)];
			newList[i] = {
				flavour: newMacaron.flavour,
				top: newMacaron.top,
				filling: newMacaron.flavour,
				bottom: newMacaron.bottom,
			};
		}
	};

	const configureBoxId = () => {
		let newId = '';
		boxSelection === 'five' ? (newId += 'x') : (newId += 'y');
		macaronList.slice(0, boxSelection === 'ten' ? macaronList.length : 5).map((macaron) => {
			newId += macaronLibrary.find((lib) => {
				return lib.flavour === macaron.flavour;
			}).id;
		});
		console.log('configuration id: ' + newId);
		return newId;
	};

	const getDescription = () => {
		let description = '';
		macaronLibrary.map((macaron) => {
			let macaronCount = 0;
			macaronList.slice(0, boxSelection === 'ten' ? 10 : 5).map((obj) => {
				if (obj.flavour === macaron.flavour) {
					macaronCount++;
				}
			});
			if (macaronCount > 0) {
				description === ''
					? (description += `${macaron.title} x ${macaronCount}`)
					: (description += `, ${macaron.title} x ${macaronCount}`);
			}
		});
		return description;
	};

	useEffect(() => {
		randomizeMacarons();
		if (macaronId) {
			try {
				macaronId.charAt(0) === 'x' ? setBoxSelection('five') : setBoxSelection('ten');
				let newList = [...macaronList];
				let count = 0;
				console.log(macaronId);

				macaronId
					.slice(1)
					.split('')
					.map((char) => {
						let newMacaron = macaronLibrary.find((obj) => {
							return obj.id === char;
						});
						console.log(newMacaron);
						newList[count].flavour = newMacaron.flavour;
						newList[count].top = newMacaron.top;
						newList[count].filling = newMacaron.flavour;
						newList[count].bottom = newMacaron.bottom;
						count = count + 1;
					});
				setMacaronList(newList);
				toastNotify('success', 'Successfuly loaded!');
			} catch (error) {
				//show modal to indicate it could not be loaded
				console.log(error);
				toastNotify('error', 'Invalid code, check your code and try again');
			}
		}
	}, [macaronId]);

	useEffect(() => {
		setBoxId(configureBoxId);
		console.log('boxId initialized: ' + boxId);
	}, [macaronList, boxSelection]);

	return (
		<>
			<Modal
				open={modal === 'config'}
				onClose={() => {
					setModal();
					setModalMessage();
				}}
			>
				<div className='config-modal'>
					<h3 style={{ margin: '0 0 12px 0', color: '#efbbcf' }}>Share Link</h3>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<input
							className='config-input'
							disabled={true}
							value={window.location.href.split('-')[0] + '-builder/' + boxId}
						/>
						<CopyToClipboard
							text={window.location.href.split('-')[0] + '-builder/' + boxId}
							onClick={() => setModalMessage('link-copy')}
						>
							<Button
								style={{
									backgroundColor: '#efbbcf',
									color: 'white',
									height: '40px',
									fontSize: '20px',
								}}
								onClick={() => setModalMessage('link-copy')}
							>
								<i class='fas fa-copy' />
							</Button>
						</CopyToClipboard>
					</div>
					{modalMessage === 'link-copy' ? (
						<p style={{ marginTop: '14px', fontSize: '14px' }}>Link copied to clipboard!</p>
					) : (
						<p style={{ marginTop: '14px', fontSize: '14px' }}>&nbsp;</p>
					)}
					{/* <Button onClick={() => setModal()}>Close</Button> */}
				</div>
			</Modal>

			<div className='builder-container'>
				<div className='display-panel'>
					<div className='share-button'>
						<Button
							style={{
								backgroundColor: 'rgb(230,230,230)',
								color: 'white',
								backgroundColor: '#efbbcf',
								fontSize: '12px',
								borderRadius: 0,
							}}
							onClick={() => setModal('config')}
						>
							Share configuration
						</Button>
					</div>
					<div className='display-container'>
						<MacaronBox
							boxSelection={boxSelection}
							macaronList={macaronList}
							selectedMacaron={selectedMacaron}
							setMacaron={setSelectedMacaron}
							clearSelection={clearSelection}
						/>
					</div>
					<div className='display-panel-summary'>
						{/* {macaronList.map((macaron) => (
								<div className={`summary-tag ${macaron.flavour}`}>
									{
										macaronLibrary.find((obj) => {
											return obj.flavour == macaron.flavour;
										}).title
									}
								</div>
							))} */}
						{macaronLibrary.map((macaron) => {
							let macaronCount = 0;
							let boxSize = boxSelection === 'ten' ? 10 : 5;
							macaronList.slice(0, boxSize).map((obj) => {
								if (obj.flavour === macaron.flavour) {
									macaronCount++;
								}
							});
							return (
								macaronCount > 0 && (
									<div className={`summary-tag ${macaron.flavour}`}>
										{macaron.title}: {macaronCount}
									</div>
								)
							);
						})}
					</div>
				</div>
				<div className='builder-panel'>
					<div className='builder-panel-selector'>
						<div>
							<ToggleButtonGroup
								value={boxSelection}
								exclusive
								onChange={handleBoxSelection}
								size='small'
								style={{ marginTop: 10, justifyContent: 'center' }}
							>
								<ToggleButton value='five'>Box of 5</ToggleButton>
								<ToggleButton value='ten'>Box of 10</ToggleButton>
							</ToggleButtonGroup>
						</div>

						{!selectedMacaron && (
							<div>
								<p>Select a Macaron!</p>
								<p style={{ cursor: 'pointer' }} onClick={randomizeMacarons}>
									or..{' '}
								</p>

								<Button color='primary' onClick={randomizeMacarons} style={{ color: '#ff5c58' }}>
									randomize
								</Button>
							</div>
						)}
						{/* Show panel for flavour selector */}
						{selectedMacaron && macaronList[selectedMacaron].flavour !== 'custom' && (
							<div className='color-selector'>
								<div
									onClick={() => handleSegmentSelection('top')}
									className={'color-selector-selection selected'}
								>
									<img
										alt=''
										src={
											selectedMacaron &&
											macaronLibrary.find((obj) => {
												return obj.flavour === macaronList[selectedMacaron].flavour;
											}).image
										}
									/>
									<p>
										{selectedMacaron &&
											macaronLibrary.find((obj) => {
												return obj.flavour === macaronList[selectedMacaron].flavour;
											}).title}
									</p>
								</div>
							</div>
						)}
						{/* Show panel for custom macaron builder */}
						{selectedMacaron && macaronList[selectedMacaron].flavour === 'custom' && (
							<div className='color-selector'>
								<div
									onClick={() => handleSegmentSelection('top')}
									className={`color-selector-selection ${
										selectedSegment === 'top' ? 'selected' : null
									}`}
								>
									<p>Top</p>
									<i
										class={
											selectedMacaron
												? `fas fa-circle ${macaronList[selectedMacaron].top}`
												: 'fas fa-circle'
										}
									/>
								</div>
								<div
									onClick={() => handleSegmentSelection('filling')}
									className={`color-selector-selection ${
										selectedSegment === 'filling' ? 'selected' : null
									}`}
								>
									<p>Filling</p>
									<i
										class={
											selectedMacaron
												? `fas fa-circle ${macaronList[selectedMacaron].filling}`
												: 'fas fa-circle'
										}
									/>
								</div>
								<div
									onClick={() => handleSegmentSelection('bottom')}
									className={`color-selector-selection ${
										selectedSegment === 'bottom' ? 'selected' : null
									}`}
								>
									<p>Bottom</p>
									<i
										class={
											selectedMacaron
												? `fas fa-circle ${macaronList[selectedMacaron].bottom}`
												: 'fas fa-circle'
										}
									/>
								</div>
							</div>
						)}
						{/* Show custom colour seleciton */}
						{selectionWindow &&
							selectedMacaron &&
							macaronList[selectedMacaron].flavour === 'custom' && (
								<SelectionWindow
									buildType={selectedMacaron && macaronList[selectedMacaron].flavour === 'custom'}
									list={macaronLibrary}
									handleSelectorSelection={handleSelectorSelection}
									handleFlavourSelection={handleFlavourSelection}
									macaronList={macaronList}
									selectedMacaron={selectedMacaron}
									testText='custom'
								/>
							)}

						{/* show flavour selection */}
						{selectionWindow &&
							selectedMacaron &&
							macaronList[selectedMacaron].flavour !== 'custom' && (
								<SelectionWindow
									list={macaronLibrary}
									handleSelectorSelection={handleSelectorSelection}
									handleFlavourSelection={handleFlavourSelection}
									macaronList={macaronList}
									selectedMacaron={selectedMacaron}
									testText='flavour'
								/>
							)}
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<p style={{ fontWeight: '900', fontSize: '14px' }}>
								Total: ${boxSelection === 'ten' ? '30.00' : '15.00'}
							</p>
							<Button
								variant='contained'
								style={{
									backgroundColor: boxSelection !== null ? '#efbbcf' : 'grey',
									color: 'white',
									margin: 20,
								}}
								disabled={boxSelection === null}
								onClick={() => {
									dispatch({
										type: ADD_ITEM,
										payload: {
											id: boxId,
											imageUrl:
												'https://i.pinimg.com/474x/ec/36/fb/ec36fb9f509c3ac01ad1c6d4a4d45059.jpg',
											category: 'Macaron',
											title: boxSelection === 'ten' ? 'Box of 10 - Custom' : 'Box of 5 - Custom',
											description: getDescription() + ' - ' + configureBoxId(),
											price: boxSelection === 'ten' ? 29.99 : 14.99,
										},
									});
									toastNotify('added', 'Item added to cart');
									setSelectedMacaron();
								}}
							>
								ADD ITEM
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default connect()(MacaronBuilder);
