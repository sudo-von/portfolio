import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = (method, url, body) => {

    const [ data, setData ] = useState({})
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {

        setLoading(true)
        const fetchData = async () => {
          try {
            const res = await axios({
                method: method,
                url: url,
                data: body
            })            
            const response = await res?.data
            console.log(response)
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