/* Http request handler. */
import httpClient from '.'
/* Custom interceptors. */
import { errorInterceptor } from '../interceptors/error.interceptor'

const ENDPOINT = '/questions'

httpClient.interceptors.response.use(response => responseInterceptor(response), error => errorInterceptor(error))

/* Get the questions that will be printed in Query. */
const getQuestions = () =>
    new Promise( ( resolve, reject ) => 
        httpClient.get(ENDPOINT)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    )

/* Send a question that once validated will be stored. */
const sendQuestion = (data) =>
    new Promise( ( resolve, reject ) => 
        httpClient.post(ENDPOINT, data)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    )

export {
    getQuestions,
    sendQuestion
}