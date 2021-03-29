/* Axios. */
import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:80/' : 'http://someapi:80/'

const returnAxiosInstance = () => axios.create({
    baseURL : baseURL,
    headers: {'Accept': 'application/json'}
})

export const getData = (url) => returnAxiosInstance().get(url).then(res => res.data)
export const sendData = (url, data) => returnAxiosInstance().post(url, data).then(res => res.data)
