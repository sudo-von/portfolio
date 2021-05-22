/* Http request handler. */
import httpClient from '.'
/* Custom interceptors. */
import { errorInterceptor } from '../interceptors/error.interceptor'

const ENDPOINT = '/projects'

httpClient.interceptors.response.use(errorInterceptor)

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