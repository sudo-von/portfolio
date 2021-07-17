import React, { useEffect } from 'react'
/* Custom components. */
import Input from './Input'
import Notification from '../../../components/Notification'
import Button from '../../../components/Button'
/* React-hook-form. */
import { useForm } from 'react-hook-form'
/* Custom hooks. */
import useQuestion from '../../../hooks/useQuestion/'

const styles = {
    form: {
        display: "flex",
        flexDirection: "column", 
        alignItems: "center", 
        width: "100%"
    }
}

const Form = () => {

    const { register, getValues, reset, formState: { errors }, control, clearErrors, handleSubmit } = useForm({ mode: 'onChange'})
    const { error, success, pending, submitQuestion } = useQuestion() 
    const onSubmit = data => submitQuestion(data)
    
    useEffect(() => {
        /* Clears errors when there the form was sent successfully. */
        if(success.status){
            reset( {'initial' : '', title: '' })
        }
    }, [ success ])

    
    const initial = {
        name : "initial",
        message: "Escribe tu inicial",
        defaultValue: "", 
        rules: {
            required:  { value: true, message: "Escribe tu inicial para poder continuar"},
            minLength: { value: 1 },
            maxLength: { value: 1, message: "Máximo 1 carácter" }
        },
        errors: {...errors.initial},
        register: register,
        getValues: getValues,
        control: control
    }
    const title = {
        name : "title", 
        message: "Escribe tu pregunta",
        defaultValue: "", 
        rules: {
            required:  { value: true, message: "Escribe tu pregunta para poder continuar"},
            minLength: { value: 1 },
            maxLength: { value: 300, message: "Máximo 300 caracteres" }
        }, 
        multiline: true,
        rows: 3,
        errors: {...errors.title},
        register: register,
        getValues: getValues,
        control: control
    }

    return(
        <form noValidate style={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input config={initial}/>
            <Input config={title}/>
            { error.status && <Notification message={error.message} status={"error"}/>}
            { success.status && <Notification message={success.message} status={"success"}/>}
            <Button type="submit" onClick={() => clearErrors()} variant="outlined" color="primary" pending={pending}>Enviar</Button>
        </form>
    )
}

export default Form