import { useState, useEffect } from 'react'
/* Axios. */
import axios from 'axios'

export const useFetch = (url) => {

    const [ data, setData ] = useState({})
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {

        setLoading(true)
        const fetchData = async () => {
          try {
            const res = await axios.get(url)           
            const response = await res?.data
            setData(response)
          } catch (error) {
            setError(error)
          } finally {
            setLoading(false)
          }
        }
        fetchData()
    }, [url])

    return { loading, data, error }

}