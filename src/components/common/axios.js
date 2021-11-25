import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://us-central1-abella-bakery.cloudfunctions.net/api',
	// baserURL: 'http://localhost:5000/abella-bakery/us-central1/api',
});

export default instance;
