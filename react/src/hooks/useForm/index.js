import { useState, useEffect } from 'react'
/* Custom adapters. */
import { sendQuestion } from '../../adapters/question.adapter'

const useForm = () => {
    
    const [ form, setForm ] = useState({ 
        value: { 
            initial: '', 
            question: ''
        },
        isPending: false,
        success: null,
        error: null
    })

    useEffect(() => 
        {
            setForm({...form, success: null, error: null})
        },
        [ form.value.initial, form.value.question, form.isPending ]
    )

    const handleChange = e => {
        const { name, value } = e.target
        if ( name === 'initial' && value.length <= 1 ) {
            setForm({...form, value: { ...form.value, initial: value }})
        }else if ( name === 'question' && value.length <= 300 ){
            setForm({...form, value: { ...form.value, question: value }})
        }
    }

    const handleSubmit = e => {

        setForm({
            ...form,
            isPending: true,
        })
        e.preventDefault()

        if (!form.value.initial || !form.value.question){
            setForm({
                ...form,
                isPending: false,
                success: null,
                error: "Completa los campos para poder continuar"
            })
            return
        }

        sendQuestion({titles: form.value.iniial, question: form.value.question})
            .then(res => {
                console.log('xdD')
                setForm({
                    value: {
                        initial: "",
                        question: ""
                    },
                    isPending: false,
                    success: res,
                    error: null
                })
            })
            .catch(err => {
                console.table(err)

                setForm({
                    ...form,
                    isPending: false,
                    success: null,
                    error: "Completa los campos para poder continuar"
                })
            })
    }

    return {
        form, handleChange, handleSubmit
    }

}

export default useForm