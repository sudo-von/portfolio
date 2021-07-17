import { useState, useEffect } from 'react'
/* Custom adapters. */
import { sendQuestion } from '../../adapters/question.adapter'

const useQuestion = () => {
    
    const [ error, setError ] = useState({ status: false, message: ''})
    const [ success, setSuccess ] = useState({ status: false, message: ''})
    const [ pending, setPending ] = useState(false)

    useEffect(() => {
        /* Clears error and success states. */
        if(pending){
            setError({ status: false, message: ''})
            setSuccess({ status: false, message: ''})
        }
    }, [ pending ])

    const submitQuestion = (data) => {
        /* Initialize loading. */
        setPending(true)
        /* Sends the question. */
        sendQuestion(data)
            .then( ( response ) => {
                setPending(false)
                /* If everything went well then we will set success to true. */
                setSuccess({ status: true, message: '¡Tu pregunta ha sido enviada con éxito!' })
            })
            .catch( ( response ) => {
                setPending(false)
                /* If there is an error then we will set error to true. */
                const { message } = response
                setError({ status: true, message: '¡Ha ocurrido un error, intenta más tarde' })
            })
    }
    return { error, success, pending, submitQuestion }
}

export default useQuestion