/* Axios. */
import axios from 'axios'

const baseURL = process.env.ENVIRONMENT === 'development' ? 'http://localhost:3000/' : 'http://localhost:3000/'
const returnAxiosInstance = () => axios.create({
    baseURL : baseURL,
    headers: {'Accept': 'application/json'}
})

export const getData = (url) => {
    
    const instance = returnAxiosInstance()
    return instance.get(url)
        .then(res => res.data)
        .catch(err => {
            if (err.response) {
                return new Error('Ha ocurrido un error, por favor intenta de nuevo más tarde o contacta al administrador')
            } else if (err.request) {
                return new Error('El servidor no respondió bien, por favor contacta al administrador')
            } else {
                return new Error(err)
            }
        })
}

export const sendData = (url, data, message) => {

    const instance = returnAxiosInstance()
    return new Promise((resolve, reject) => {
        instance.post(url, data)
            .then(res => resolve(message))
            .catch(err => {
                reject(new Error(err.response.data.message))
            })
    })
    
}