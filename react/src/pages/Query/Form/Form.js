import React from 'react'
/* Material-ui components. */
import TextField from '@material-ui/core/TextField'
/* Custom components. */
import Notification from '../../../components/Notification'
import Button from '../../../components/Button'
/* Custom hooks. */
import useForm from '../../../hooks/useForm'

const styles = {
    form: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%'
    },
    textField: {
        margin: '8px 0'
    },
    div: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        margin: '8px 0',
        width: '100%',
    }
}

const Form = () => {

    const { data, loading, error, handleChange, handleSubmit } = useForm()
    console.log(data, loading, error)

    return(
        <form noValidate autoComplete="off" style={styles.form} onSubmit={handleSubmit}>
            { error.error === false &&
                <Notification message={error.message} status={"success"}/>
            }
            { error.error &&
                <Notification message={error.message} status={"error"}/>
            }
            <TextField 
                variant="outlined"
                value={data.initial}
                helperText={`${data.initial.length}/1`} 
                style={styles.textField}
                onChange={handleChange} 
                name="initial"
                label="Escribe tu inicial" 
                fullWidth={true} 
            />
            <TextField 
                variant="outlined" 
                value={data.question}
                helperText={`${data.question.length}/300`}
                style={styles.textField}
                onChange={handleChange} 
                name="question" 
                label="¡Hazme una pregunta!" 
                multiline={true} 
                rows={3} 
                fullWidth={true} 
            />
            <div style={styles.div}>
                <Button style={styles.button} type="submit" variant="outlined" color="primary" loading={loading}>
                    Enviar
                </Button>
            </div>
        </form>
    )
}

export default Form