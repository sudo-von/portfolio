/* Axios. */
import axios from 'axios'

const APP_BASE_URL = process.env.ENVIRONMENT === 'development' ? 'http://localhost:3000' : 'http://www.sudovon.com:3000'

const httpClient = () => axios.create({
    baseURL : APP_BASE_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default httpClient