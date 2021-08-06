import { useState, useEffect } from 'react'
/* Axios. */
import { Request } from 'services/Request'

export const useFetch = ({ requiredPaginate=false, url, currentPage=0, currentLimit=0}) => {

    /* Pagination settings. */
    const [ page, setPage ] = useState(currentPage)
    const [ limit, setLimit ] = useState(currentLimit)
    const handlePage = (event, value) => setPage(value)
    const handleLimit = (event, value) => setPage(value)

    /* Fetch settings. */
    const [ data, setData ] = useState({})
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
          try {
            if(requiredPaginate){
              url += `?limit=${limit}&offset=${limit*(page-1)}`
            }
            const request = new Request(url)
            const response = await request.get({})
            setData(response)
          } catch (error) {
            setError(error)
          } finally {
            setLoading(false)
          }
        }
        fetchData()
    }, [url, page, limit])

    return { loading, data, error, page, limit, handlePage, handleLimit }

}