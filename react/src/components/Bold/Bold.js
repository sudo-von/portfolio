import styled from 'styled-components'

const Bold = styled.span`
  color: ${({ theme: { colors : { secondary } } }) => secondary };
  font-weight: bold;
`

export default Bold