import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  flex-grow: 1;
  padding: 35px 35px;
`;

const Container = (props) => {
  return(
    <Div 
      data-aos='fade-up'
      data-aos-offset='200'
      data-aos-delay='50'
      data-aos-duration='1000'
      data-aos-easing='ease-in-out'
      data-aos-mirror='true'
      data-aos-once='false'
      data-aos-anchor-placement='top-center'
    >
      {props.children}
    </Div>
  );
}


export default Container;