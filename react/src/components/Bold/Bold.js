import styled from 'styled-components'

const Bold = styled.span`
  color: ${({ theme: { bold: { color } } }) => color };
  font-weight: bold;
`

export default Bold