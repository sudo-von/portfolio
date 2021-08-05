import { useState, useEffect } from 'react'
/* Custom components. */
import Fab from 'components/Fab'
import Input from 'components/Input'
import Alert from 'components/Alert'
/* React-hook-form. */
import { useForm } from 'react-hook-form'
/* Material-ui components. */
import Box from '@material-ui/core/Box'
/* Axios. */
import { Request } from 'services/Request'

const ProfileForm = () => {

    const { register, formState: { errors }, control, handleSubmit, reset } = useForm({ mode: 'onChange' })
    const [ form, setForm ] = useState({
        loading: false,
        error: null,
        success: null
    })

    const onSubmit = async (data, e) => {
        setForm({
            loading: false,
            error: null,
            success: null
        })
        try{
            const request = new Request('questions/username/von')
            await request.post(data)
            setForm({...form, success: true})
            reset({question: ''})
        }catch(error){
            setForm(form => ({...form, error: 'Hubo un error al enviar tu pregunta, intenta de nuevo más tarde...'}))
        }finally{
            setForm(form => ({...form, loading: false}))
        }
    }

    return(
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            { form.error &&
                <Alert severity="error">{form.error}</Alert>
            }
            { form.success &&
                <Alert severity="success">¡Tu pregunta ha sido enviada con éxito!</Alert>
            }
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

export default ProfileForm