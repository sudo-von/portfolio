/* Styled-components. */
import styled from 'styled-components'

const Button = styled.button`
    margin: 1px;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    border: 0;
    background: ${(props) => props.active ? props.theme.colors.secondary : props.theme.colors.accent};

    &:hover{
        cursor: pointer;
    }
`

export const CarouselButton = ({ children, ...rest }) => <Button {...rest}>{children}</Button>
