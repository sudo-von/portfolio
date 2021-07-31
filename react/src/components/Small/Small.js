import styled from 'styled-components'

const Small = styled.small`
  color: ${({ theme: { small: { color } }}) => color };
`

export default Small