

export const responseInterceptor = response => {
 
    if (response.status === 200) {
        return response
    }
    
    return response

}