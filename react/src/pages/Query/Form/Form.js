import React, { useState } from 'react'
/* Custom components. */
import Input from './Input'
import Notification from '../../../components/Notification'
import Button from '../../../components/Button'
/* React-hook-form. */
import { useForm } from 'react-hook-form'
/* Custom hooks. */
import { sendQuestion } from '../../../adapters/question.adapter'

const styles = {
    form: {
        display: "flex",
        flexDirection: "column", 
        alignItems: "center", 
        width: "100%"
    }
}

const Form = () => {

    const { register, getValues, reset, formState: { errors }, control, clearErrors, handleSubmit } = useForm()
    

    const [ error, setError ] = useState(null)
    const [ pending, setPending ] = useState(false)
    const [ success, setSuccess ] = useState(null)

    const onSubmit = data => {

        setPending(true)
        setSuccess(null)
        setError(null)

        sendQuestion(data)
            .then(res => {
                setPending(false)
                setSuccess("¡Tu pregunta ha sido enviada con éxito!")
                reset({
                    initial: "",
                    title: ""
                })
            })
            .catch(res => {
                    setError(res.message)
                    setPending(false)
                }
            )
    }

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
    }

    return(
        <form noValidate autoComplete="off" style={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input config={initial} register={register} getValues={getValues} control={control}/>
            <Input config={title} register={register} getValues={getValues} control={control}/>
            { error && <Notification message={error} status={"error"}/>}
            { success && <Notification message={success} status={"success"}/>}
            <Button fullWidth={true} type="submit" onClick={() => clearErrors("")} variant="outlined" color="primary" pending={pending}>Enviar</Button>
        </form>
    )
}

export default Form