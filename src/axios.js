import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://us-central1-clone-d23ae.cloudfunctions.net/api',
	// 'http://localhost:5001/clone-d23ae/us-central1/api', // local
});

export default instance;
