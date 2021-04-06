import { useState, useEffect } from 'react'
import { sendData } from '../../adapters/'
/* Gets user's data from the API. */
const useQuery = () => {
    
    const [ state, setState ] = useState({
        loading: false,
        initial: '',
        question: '',
        success: '',
        error: null
    })

    const handleInitial = e => {
        if (e.target.value.length <= 1) {
            setState({...state, initial: e.target.value})
        }
    }

    const handleQuestion = e => {
        if (e.target.value.length <= 300) {
            setState({...state, question: e.target.value})
        }
    }
  
    const handleSubmit = e => {
        
        e.preventDefault()
        
        setState({...state, loading: true})
        if (state.initial && state.question) {
            
            const data = {
                initial: state.initial,
                title: state.question
            }

            sendData('questions', data, '¡Tu pregunta ha sido enviada con éxito!')
                .then(res => {
                    setState({...state, initial: '', question: '', loading: false, error: null, success: res})
                })
                .catch(err => {
                    setState({...state, loading: false, error: err})
                })

        }else{
            if (state.error == 'Completa los campos para poder continuar') {
                setState({...state, success: null, error: 'Completa los campos para poder continuar '})
            }else{
                setState({...state, success: null, error: 'Completa los campos para poder continuar'})
            }
        }
    }

    return [
        state, 
        handleInitial, 
        handleQuestion, 
        handleSubmit 
    ]

}

export default useQuery