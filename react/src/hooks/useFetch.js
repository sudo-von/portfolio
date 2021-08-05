import { useState, useEffect } from 'react'
/* Axios. */
import { Request } from 'services/Request'

export const useFetch = (url) => {

    const [ data, setData ] = useState({})
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {

        setLoading(true)
        const fetchData = async () => {
          try {
            const request = new Request(url)
            const response = await request.get('')
            setData(response)
          } catch (error) {
            console.log(error.message,1)
            alert(error)
            setError(error)
          } finally {
            setLoading(false)
          }
        }
        fetchData()
    }, [url])

    return { loading, data, error }

}