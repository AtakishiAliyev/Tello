import axios from 'axios'
const { REACT_APP_API_KEY } = process.env

const instance = axios.create({
    baseURL: 'https://api.chec.io/v1',
    headers: {
        "X-Authorization": 'pk_437901876da421fb3e83a2493acac7205e61388d27e32',
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

export default instance