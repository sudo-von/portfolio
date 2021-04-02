import React, { useEffect, useState } from 'react'
/* Material-ui components. */
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
        width: '50%'
    }
}

const Form = ({initial, question, handleInitial, handleQuestion, handleSubmit}) => {

    return(
        <form noValidate autoComplete="off" style={styles.form}>
            <TextField helperText={`${initial.length}/1`} value={initial} onChange={handleInitial} style={styles.textField} fullWidth={true} id="outlined-basic" label="Escribe tu inicial" variant="outlined" />
            <TextField helperText={`${question.length}/300`} value={question} onChange={handleQuestion} style={styles.textField} fullWidth={true} id="outlined-basic" label="¡Hazme una pregunta!" multiline rows={3} variant="outlined" />
            <div style={styles.div}>
                <Button style={styles.button} onClick={handleSubmit} variant="outlined" color="primary">
                    Enviar
                </Button>
            </div>
        </form>
    )
}

export default Form