/* Return authorization token stored in the local storage. */
const getAuthToken = () => localStorage.getItem('token');

/* Sets token in the authorization header. */
const authInterceptor = (config) => {
    config.headers['Authorization'] = getAuthToken()
    return config
}
