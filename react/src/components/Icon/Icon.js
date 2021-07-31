import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  alignItems: center;
  svg{
    width: ${props => props.size ? props.size : '24'}px; 
    height: ${props => props.size ? props.size : '24'}px;
    fill: ${({ theme: { icon: { fill } } }) => fill };
  }
`

const Icon = ({ size, svg }) =>
  <Wrapper size={size}>
    {svg}
  </Wrapper>

export default Icon