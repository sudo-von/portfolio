import styled from 'styled-components'

const Title = styled.h1`
  color: ${({ theme: { text } }) => text.highlighted_color};
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
`;

export default Title;
