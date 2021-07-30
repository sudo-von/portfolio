import styled from 'styled-components'

const H1 = styled.h1`
  color: ${({ theme: { text: { color } } }) => color};
  font-size: ${props => props.fontSize ? props.fontSize  : '48'}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  padding: 0;
  margin: 0;
`

export default H1
