import styled from 'styled-components'

const Container = styled.span`
  background: ${({ theme }) => theme.navbar_background };
  display: flex;
  justify-content: flex-end;
  }
`;

export default Container;