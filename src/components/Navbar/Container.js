import styled from 'styled-components'

const Container = styled.span`
  background: ${({ theme: { navbar } }) => navbar.background_color };
  display: flex;
  justify-content: flex-end;
  }
`;

export default Container;