import { useEffect, useState } from 'react'
/* Custom adapters. */
import { getQuestions } from '../../adapters/question.adapter'

const useQuestions = () => {
    
    const [ questions, setQuestions ] = useState([])
    const [ isLoading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => 
        {
            getQuestions()
                .then(res => {
                    setQuestions(res.results)
                    setLoading(false)
                })
                .catch(err => {
                    setError(err)
                    setLoading(false)
                })
        }, []
    )

    return {
        questions,
        isLoading,
        error
    }
    
}

export default useQuestions