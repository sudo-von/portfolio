import styled from 'styled-components'

const Hr = styled.hr`
    border: 1px solid ${({ theme: { hr } }) => hr.border_color }; 
    width: 100%;
    margin-top: 25px;
`

export default Hr