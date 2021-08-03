/* Styled-components. */
import styled from 'styled-components'
/* Material-ui. */
import { Fab as MaterialFab } from '@material-ui/core'

const Wrapper = styled.div`
    button{
        background-color: ${({ theme: { colors : { secondary } } }) => secondary };
        transition: .5s;
    }
    button:hover{
        background-color: ${({ theme: { colors : { secondary } } }) => secondary };
        opacity: 0.9;
    }
    span{
        color: white;
    }
`
const Fab = ({children, ...rest}) => 
    <Wrapper>
        <MaterialFab 
            {...rest}
        >
            {children}
        </MaterialFab>
    </Wrapper>


export default Fab