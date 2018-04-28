import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-tongeren.firebaseio.com/'
});

export default instance;
