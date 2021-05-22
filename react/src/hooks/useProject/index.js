import { useEffect, useState } from 'react'
/* Custom adapters. */
import { getProjects } from '../../adapters/project.adapter'

const useProject = () => {
    
    const [ projects, setProjects ] = useState([])
    const [ isLoading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => 
        {
            getProjects()
                .then(res => {
                    setProjects(res.results)
                    setLoading(false)
                })
                .catch(err => {
                    setError(err)
                    setLoading(false)
                })
        }, []
    )

    return {
        projects,
        isLoading,
        error
    }
    
}

export default useProject