import React from 'react'
/* Custom hooks. */
import { Controller } from 'react-hook-form'
/* Material-ui components. */
import TextField from '@material-ui/core/TextField'

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

const Input = ({ config, register, getValues, control }) => {
    
    const { name, defaultValue, rules, message, errors, ...rest } = config

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            {...register(name, { 
                    ...rules
                })
            }
            render={({ field }) => 
                <TextField 
                    variant="outlined"
                    {...field}
                    error={errors.message ? true : false}
                    style={styles.textField}
                    label={errors.message ? errors.message : message}
                    helperText={`${getValues(name).length}/${rules.maxLength.value}`}
                    {...rest}
                    fullWidth={true} 
                />
            }
        />
    )
}

export default Input
