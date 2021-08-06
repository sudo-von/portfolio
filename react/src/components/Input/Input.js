/* Styled-components. */
import styled from 'styled-components'
/* Material-ui. */
import TextField from '@material-ui/core/TextField'
/* React-hook-form. */
import { Controller } from 'react-hook-form'

const Wrapper = styled.div`

    & label.Mui-focused{
        color: ${({ theme : { colors : { secondary } } }) => secondary };
    }

    & .MuiInput-underline:after{
        border-bottom-color: white;
    }

    & .MuiOutlinedInput-root{
        &:hover fieldset{
            border-color: ${({ theme : { colors : { secondary } } }) => secondary };
        }

        &.Mui-focused fieldset{
            border-color: ${({ theme : { colors : { secondary } } }) => secondary };
        }
    }
`

const Input = ({ name, defaultValue, message, rules, errors, control, register, ...rest}) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue ? defaultValue : ''}
            refs={{...register(name, { 
                    ...rules
                })
            }}
            render={({ field }) =>
                <Wrapper>
                    <TextField 
                        variant='outlined'
                        error={errors.message ? true : false}
                        label={errors.message ? errors.message : message}
                        helperText={`${field.value.length}/${rules.maxLength.value}`}
                        fullWidth={true} 
                        {...field}
                        {...rest}
                    />
                </Wrapper>
            }
        />
    )
}

export default Input
