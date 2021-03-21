import styled from 'styled-components'

const HighlightedText = styled.span`
  color: ${({ theme: { text } }) => text.highlighted_color };
  font-weight: bold;
`;

export default HighlightedText