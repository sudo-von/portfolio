/* React-router. */
import { useHistory } from 'react-router-dom'

/* This interceptor will handle all the common errors at a general context. */
export const errorInterceptor = error => {

    if (!error.response) {
      return Promise.reject(error)
    }

    switch(error.response.status) {
        case 400:
            console.error(error.response.status, error.message)
            break
        /* Unauthorized. */
        case 401:
            let history = useHistory()
            localStorage.removeItem('token')
            history.push('/')
            break
        default:
            console.error(error.response.status, error.message)
    }
    return Promise.reject(error.response.data)
}