import axios from 'axios'
const { REACT_APP_API_KEY } = 'pk_437901876da421fb3e83a2493acac7205e61388d27e32'

const instance = axios.create({
    baseURL: 'https://api.chec.io/v1',
    headers: {
        "X-Authorization": REACT_APP_API_KEY,
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

export default instance