import React from 'react'
/* Material-ui components. */
import TextField from '@material-ui/core/TextField'
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

    const { register, getValues, formState: { errors }, control, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)

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
    const question = {
        name : "question", 
        message: "Escribe tu pregunta",
        defaultValue: "", 
        rules: {
            required:  { value: true, message: "Escribe una pregunta para poder continuar"},
            minLength: { value: 1 },
            maxLength: { value: 300, message: "Máximo 300 caracteres" }
        }, 
        multiline: true,
        rows: 3,
        errors: {...errors.question},
    }

    return(
        <form noValidate autoComplete="off" style={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input config={initial} register={register} getValues={getValues} control={control}/>
            <Input config={question} register={register} getValues={getValues} control={control}/>
            <Button fullWidth={true} type="submit" variant="outlined" color="primary">Enviar</Button>
        </form>
    )
}

export default Form