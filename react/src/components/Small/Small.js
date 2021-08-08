import styled from 'styled-components'

const Small = styled.small`
  color: ${({ theme: { colors : { accent } } }) => accent };
`

export default Small
