/* Http request handler. */
import httpClient from '.'
/* Custom interceptors. */
import { errorInterceptor } from '../interceptors/error.interceptor'

const ENDPOINT = '/questions'

httpClient.interceptors.response.use(errorInterceptor)

/* Get the questions that will be printed in Query. */
const getQuestions = () =>
    new Promise( ( resolve, reject ) => 
        httpClient.get(ENDPOINT)
            .then(res => resolve(res))
            .catch(err => reject(err))
    )

/* Send a question that once validated will be stored. */
const sendQuestion = (data) =>
    new Promise( ( resolve, reject ) => 
        httpClient.post(ENDPOINT, data)
            .then(res => resolve(res))
            .catch(err => reject(err))
    )