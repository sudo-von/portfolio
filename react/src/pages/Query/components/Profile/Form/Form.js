/* Custom components. */
import Fab from 'components/Fab'
import Input from 'components/Input'
/* React-hook-form. */
import { useForm } from 'react-hook-form'
/* Material-ui components. */
import Box from '@material-ui/core/Box'

const Form = () => {

    const { register, getValues, formState: { errors }, control, handleSubmit } = useForm()
    const onSubmit = data => {
        
    }
    
    const question = {
        name : 'question', 
        message: 'Escribe tu pregunta',
        defaultValue: '', 
        rules: {
            required:  { value: true, message: 'Escribe una pregunta para poder continuar'},
            minLength: { value: 1 },
            maxLength: { value: 300, message: 'Máximo 300 caracteres' }
        }, 
        multiline: true,
        rows: 3,
        errors: {...errors.question},
    }

    return(
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <Input config={question} register={register} getValues={getValues} control={control}/>
            <Box display='flex' justifyContent='center'>
                <Fab type='submit' variant='extended' size='medium'>Enviar pregunta</Fab>
            </Box>
        </form>
    )
}

export default Form