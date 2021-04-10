import { useEffect, useState } from 'react'
import { getData } from '../../adapters'

/* Gets data from the API. */
const useData = (url) => {
    
    const [ data, setData ] = useState([])
    const [ isLoading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => 
        {

            getData(url)
                .then(data => {
                    setData(data['results'])
                    setLoading(false)
                })
                .catch(err => {
                    setError(err)
                    setLoading(false)
                })
                
        }, []
    )

    return {
        data,
        isLoading,
        error
    }
    
}

export default useData