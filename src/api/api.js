import axios from 'axios'
const { REACT_APP_API_KEY } = process.env

const instance = axios.create({
    baseURL: 'https://api.chec.io/v1',
    headers: {
        "X-Authorization": REACT_APP_API_KEY,
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

export default instance