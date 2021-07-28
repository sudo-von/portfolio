import styled from 'styled-components'

const Bold = styled.span`
  color: ${({ theme: { text } }) => text.highlighted_color };
  font-weight: bold;
`

export default Bold