import styled from 'styled-components'

const Image = styled.img`
    width: 100%;
    border-radius: ${ props => props.borderRadius ? props.borderRadius : '0'}px;
`

export default Image