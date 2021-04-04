import styled from 'styled-components'

const Small = styled.small`
  color: ${({ theme: { text }}) => text.color };
`

export default Small