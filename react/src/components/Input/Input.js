/* Styled-components. */
import styled from 'styled-components'
/* Material-ui. */
import TextField from '@material-ui/core/TextField'
/* React-hook-form. */
import { Controller } from 'react-hook-form'

const Wrapper = styled.div`
    label, p{
        color : ${({ theme : { colors : { accent } } }) => accent };
    }
    textarea, input{
        color : ${({ theme : { colors : { primary } } }) => primary };
    }
    fieldset{
        border-color: ${({ theme : { colors : { accent } } }) => accent };
        color : ${({ theme : { colors : { accent } } }) => accent };
    }
    & label.Mui-focused{
        color: ${({ theme : { colors : { secondary } } }) => secondary };
    }

    & .MuiInput-underline:after{
        border-color: ${({ theme : { colors : { secondary } } }) => secondary };
    }
    & .MuiOutlinedInput-root{
    fieldset: {
        border-color: ${({ theme : { colors : { secondary } } }) => secondary };
    }
    &:hover fieldset{
        border-color: ${({ theme : { colors : { accent } } }) => accent };
    }
    &.Mui-focused fieldset{
        border-color: ${({ theme : { colors : { secondary } } }) => secondary };
    }
`

const CustomInput = ({ config, register, getValues, control }) => {

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
            render={({ onChange, onBlur, value, name, ref }) => {
                return(
                <Wrapper>
                    <TextField 
                        variant='outlined'
                        error={errors.message ? true : false}
                        label={errors.message ? errors.message : message}
                        helperText={`${getValues(name).length}/${rules.maxLength.value}`}
                        fullWidth={true} 
                        onBlur={onBlur}
                        onChange={onChange}
                        checked={value}
                        inputRef={ref}
                        {...rest}
                    />
                </Wrapper>
                )}
            }
        />
    )
}

export default CustomInput
