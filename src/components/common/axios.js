import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://us-central1-abella-bakery.cloudfunctions.net/api',
});

export default instance;
