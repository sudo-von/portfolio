import { useState } from 'react'
/* Custom components. */
import Fab from 'components/Fab'
import Input from 'components/Input'
/* React-hook-form. */
import { useForm } from 'react-hook-form'
/* Material-ui components. */
import Box from '@material-ui/core/Box'
/* Axios. */
import Axios from 'api/index'

const Form = () => {

    const { register, formState: { errors }, control, handleSubmit, reset } = useForm({ mode: 'onChange' })
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    const onSubmit = async (data, e) => {
        setLoading(true)
        try{
            const request = await Axios.post('questions/username/von', data)
            setError(null)
            reset({ question: ''})
        }catch(error){
            setError(error)
        }finally{
            setLoading(false)
        }
    }

    return(
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <Input
                name='question'
                message='Escribe tu pregunta'
                rules={{
                    required:  { value: true, message: 'Escribe una pregunta para poder continuar'},
                    minLength: { value: 1 },
                    maxLength: { value: 300, message: 'Máximo 300 caracteres' }
                }}
                multiline={true}
                rows={3}
                errors={{...errors.question}}
                fullWidth={true} 
                control={control}
                register={register}
            />
            <Box display='flex' justifyContent='center'>
                <Fab type='submit' variant='extended' size='medium'>Enviar pregunta</Fab>
            </Box>
        </form>
    )
}

export default Form