import styled from 'styled-components'

const H5 = styled.h5`
  color: ${({ theme: { colors : { primary } } }) => primary };
  font-size: ${props => props.fontSize ? props.fontSize  : '18'}px;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  padding: 0;
  margin: 0;
`

export default H5
