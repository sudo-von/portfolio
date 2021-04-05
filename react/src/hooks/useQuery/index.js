import { useState } from 'react'
import { sendData } from '../../adapters/'
/* Gets user's data from the API. */
const useQuery = () => {
    

    const [initial, setInitial] = useState('')
    const [question, setQuestion] = useState('')  
  
    const handleInitial = e => {
        if (e.target.value.length <= 1) {
            setInitial(e.target.value)
        }
    }
    const handleQuestion = e => {
        if (e.target.value.length <= 300) {
            setQuestion(e.target.value)
        }
    }
  
    const handleSubmit = e => {
      e.preventDefault()
      if (initial && question) {
        const data = {
            initial,
            title: question
        }
        sendData('questions', data, '¡Tu pregunta ha sido enviada con éxito!')
      }else{
          alert('Completa los campos para poder continuar')
      }
    }

    return [ initial, question, handleInitial, handleQuestion, handleSubmit ]

}

export default useQuery