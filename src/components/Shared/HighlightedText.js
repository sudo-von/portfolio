import styled from 'styled-components'

const HighlightedText = styled.span`
  color: ${({ theme }) => theme.highlighted_text };
  font-weight: bold;
`;

export default HighlightedText;