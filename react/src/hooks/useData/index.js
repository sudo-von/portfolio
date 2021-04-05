import { useEffect, useState } from 'react'
import { getData } from '../../adapters'

/* Gets data from the API. */
const useData = (url) => {
    
    const [ data, setData ] = useState([])
    const [ isLoading, setLoading ] = useState(true)

    useEffect(() => 
        {

            getData(url)
                .then(data => {
                    setData(data['results'])
                    setLoading(false)
                })
                .catch(err => {
                    setLoading(false)
                })
        }, []
    )

    return {
        data,
        isLoading
    }
    
}

export default useData