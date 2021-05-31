import { useEffect, useState } from 'react'
/* Custom adapters. */
import { getCTFS } from '../../adapters/ctf.adapter'

const useCTF = () => {
    
    const [ ctfs, setCTFS ] = useState([])
    const [ isLoading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => 
        {

            getCTFS()
                .then(res => {
                    setCTFS(res.results)
                    setLoading(false)
                })
                .catch(err => {
                    setError(err)
                    setLoading(false)
                })
                
        }, []
    )

    return {
        ctfs,
        isLoading,
        error
    }
    
}

export default useCTF