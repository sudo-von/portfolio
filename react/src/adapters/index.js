/* Axios. */
import axios from 'axios'

const environment = process.env.NODE_ENV === 'development' ? 'http://localhost:80/' : 'http://someapi:80/'

const returnAxiosInstance = () => axios.create({
    baseURL : environment,
    headers: {'Accept': 'application/json'}
})

export const getData = (url) => returnAxiosInstance().get(url)
export const sendData = (url, data) => returnAxiosInstance().post(url, data)
