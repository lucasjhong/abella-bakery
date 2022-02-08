import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import UserInfo from '../../components/UserInfo/UserInfo';

import { connect } from 'react-redux';
import { loginUser, signupUser } from '../../components/reducers/userAction';
import { useForm } from '../../hooks/useForm';

import './User.scss';

const styles = {
	button: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		borderRadius: 3,
		border: 0,
		color: 'white',
		width: '100%',
		height: 42,
		padding: '0 30px',
		margin: '30px',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	},
	textField: {
		width: '100%',
		margin: '12px',
	},
	spinner: {
		color: 'white',
	},
};

const User = (props) => {
	const { classes } = props;
	const { loading, errorList } = props.UI;
	const { authenticated } = props.user;

	useEffect(() => {
		setErrors(errorList);
	}, [errorList]);

	// const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({
		email: 'aa',
		password: 'test',
		general: null,
	});
	const [loginState, setLoginState] = useState('login');

	const [loginInfo, handleLoginChange] = useForm({ email: '', password: '' });
	const [signupInfo, handleSignupChange] = useForm({
		email: '',
		password: '',
		confirmPassword: '',
		handle: '',
	});

	const handleSubmitLogin = (event) => {
		event.preventDefault();
		const userData = {
			email: loginInfo.email,
			password: loginInfo.password,
		};

		props.loginUser(userData, props.history);
	};

	const handleSubmitSignup = (event) => {
		event.preventDefault();
		const userData = {
			email: signupInfo.email,
			password: signupInfo.password,
			confirmPassword: signupInfo.confirmPassword,
			handle: signupInfo.username,
		};

		props.signupUser(userData, props.history);
	};

	const switchForm = (form) => {
		setLoginState(form);
	};

	return (
		<>
			{authenticated && <UserInfo user={props.user} />}

			{!authenticated && loginState === 'login' && (
				<div className='login-panel'>
					<h3>Log In</h3>
					<form className='login-form' onSubmit={handleSubmitLogin}>
						<TextField
							className={classes.textField}
							id='standard-basic'
							name='email'
							label='Email'
							type='email'
							helperText={errors.email}
							error={errors.email || errors.general ? true : false}
							value={loginInfo.email}
							onChange={handleLoginChange}
						/>
						<TextField
							className={classes.textField}
							id='standard-basic'
							name='password'
							label='Password'
							type='password'
							helperText={errors.password ? errors.password : null}
							error={errors.password || errors.general ? true : false}
							value={loginInfo.password}
							onChange={handleLoginChange}
						/>
						{errors.general && <p className='error-message'>{errors.general}</p>}
						<Button className={classes.button} type='submit'>
							{!loading ? 'Login' : <CircularProgress size={30} className={classes.spinner} />}
						</Button>
					</form>

					<p>Don't have an account?</p>
					<p style={{ color: 'salmon', cursor: 'pointer' }} onClick={() => switchForm('signup')}>
						Sign up here
					</p>
				</div>
			)}

			{!authenticated && loginState === 'signup' && (
				<div className='login-panel'>
					<h3>Sign Up</h3>

					<form className='login-form' onSubmit={handleSubmitSignup}>
						<TextField
							className={classes.textField}
							id='standard-basic'
							name='email'
							label='Email'
							type='email'
							helperText={errors.email}
							error={errors.email ? true : false}
							value={loginInfo.email}
							onChange={handleSignupChange}
						/>
						<TextField
							className={classes.textField}
							id='standard-basic'
							name='password'
							label='Password'
							type='password'
							helperText={errors.password}
							error={errors.password ? true : false}
							value={loginInfo.password}
							onChange={handleSignupChange}
						/>
						<TextField
							className={classes.textField}
							id='standard-basic'
							name='confirmPassword'
							label='Confirm Password'
							type='password'
							helperText={errors.confirmPassword}
							error={errors.confirmPassword ? true : false}
							value={loginInfo.confirmPassword}
							onChange={handleSignupChange}
						/>
						<TextField
							className={classes.textField}
							id='standard-basic'
							name='username'
							label='Username'
							type='text'
							helperText={errors.handle}
							error={errors.handle ? true : false}
							value={loginInfo.username}
							onChange={handleSignupChange}
						/>
						{errors.general && <p className='error-message'>{errors.general}</p>}
						<Button className={classes.button} type='submit'>
							{!loading ? 'Sign Up' : <CircularProgress size={30} className={classes.spinner} />}
						</Button>
					</form>
					<p>Already have an account?</p>
					<p style={{ color: 'salmon', cursor: 'pointer' }} onClick={() => switchForm('login')}>
						Log In here
					</p>
				</div>
			)}

			{loginState === 'authenticated' && <div className='authenticated'></div>}
		</>
	);
};

const mapStateToProps = (state) => ({
	user: state.user,
	UI: state.UI,
});

const mapActionsToProps = {
	loginUser,
	signupUser,
};

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(User));
