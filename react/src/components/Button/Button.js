/* Styled-components. */
import styled from 'styled-components'
/* Material-ui. */
import { Button as MaterialButton } from '@material-ui/core'
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const Wrapper = styled.div`
    span{
        color: ${({ theme: { colors : { secondary } } }) => secondary };
    }
`

const Button = ({children, ...rest}) => 
    <Wrapper>
        <MaterialButton 
            {...rest}
        >
            {children}
        </MaterialButton>
    </Wrapper>


export default Button