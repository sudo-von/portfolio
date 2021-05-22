/* Http request handler. */
import httpClient from '.'
/* Custom interceptors. */
import { errorInterceptor } from '../interceptors/error.interceptor'
import { responseInterceptor } from '../interceptors/response.interceptor'

const ENDPOINT = '/users'

httpClient.interceptors.response.use(response => responseInterceptor(response), error => errorInterceptor(error))

/* Get the ctfs that will be printed in the Portfolio. */
const getUserByID = (userID) =>
    new Promise( ( resolve, reject ) => 
        httpClient.get(`${ENDPOINT}/${userID}`)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
        )

/* Get the ctfs that will be printed in the Portfolio. */
const getUsers = () =>
    new Promise( ( resolve, reject ) => 
        httpClient().get(ENDPOINT)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    )

export {
    getUserByID,
    getUsers
}