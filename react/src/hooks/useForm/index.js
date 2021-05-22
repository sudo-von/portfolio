import { useState, useEffect } from 'react'
/* Custom adapters. */
import { sendData } from '../../adapters'

const useForm = () => {
    
    const [ data, setData ] = useState({ initial: '', question: ''})
    const [ isLoading, setLoading ] = useState(false)
    const [ error, setError ] = useState({ error: null, message: ''})

    useEffect(() => {
        setError({
            error: null,
            message: ''
        })
    }, [data.initial, data.question])

    const handleChange = e => {
        const { name, value } = e.target
        if ( name === 'initial' && value.length <= 1 ) {
            setData({...data, initial: value })
        }else if ( name === 'question' && value.length <= 300 ){
            setData({...data, question: value })
        }
    }

    const handleSubmit = e => {
        
        e.preventDefault()
        setLoading(true)

        if (!data.initial || !data.question){
            setLoading(false)
            setError({
                error: true,
                message: 'Completa los campos para poder continuar'
            })
            return
        }

        const successMessage = '¡Tu pregunta ha sido enviada con éxito!'
        sendData('questions', { initial: data.initial, title: data.question }, successMessage)
            .then(res => {
                setLoading(false)
                setData({
                    initial: '',
                    question: ''
                })
                setError({
                    error: false,
                    message: successMessage
                })
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setError({
                    error: true,
                    message: err
                })
            })
    }

    return {
        data, isLoading, error, handleChange, handleSubmit
    }

}

export default useForm