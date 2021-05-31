/* Http request handler. */
import httpClient from './index.js'
/* Custom interceptors. */
import { errorInterceptor } from '../interceptors/error.interceptor'
import { responseInterceptor } from '../interceptors/response.interceptor'

const ENDPOINT = '/projects'

httpClient.interceptors.response.use(response => responseInterceptor(response), error => errorInterceptor(error))

/* Get the projects that will be printed in the Portfolio. */
const getProjects = () =>
    new Promise( ( resolve, reject ) => 
        httpClient.get(ENDPOINT)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    )

export {
    getProjects
}