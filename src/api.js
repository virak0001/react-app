import axios from 'axios';
const token = localStorage.getItem('token')
const userToken = JSON.parse(token);
export default axios.create({
  baseURL: `http://localhost:30000/api/`,
  headers: {
    Authorization: `Bearer ` + userToken?.accessToken
  }
});