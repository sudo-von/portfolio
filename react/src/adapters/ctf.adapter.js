/* Http request handler. */
import httpClient from '.'
/* Custom interceptors. */
import { errorInterceptor } from '../interceptors/error.interceptor'
import { responseInterceptor } from '../interceptors/response.interceptor'

const ENDPOINT = '/ctfs'

httpClient.interceptors.response.use(response => responseInterceptor(response), error => errorInterceptor(error))

/* Get the ctfs that will be printed in the Portfolio. */
const getCTFS = () =>
    new Promise( ( resolve, reject ) => 
        httpClient.get(ENDPOINT)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    )

export {
    getCTFS
}