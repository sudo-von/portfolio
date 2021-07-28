import styled from 'styled-components'

const Wrapper = styled.div` 
  svg{
    width: ${props => props.size ? props.size : '24'}px; 
    height: ${props => props.size ? props.size : '24'}px;
    fill: ${({ theme: { text } }) => text.highlighted_color };
  }
`

const Icon = ({ size, children }) =>
  <Wrapper size={size}>
    {children}
  </Wrapper>

export default Icon