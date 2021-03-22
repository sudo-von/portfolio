import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Div = styled.div`
    flex-grow: 1;
    padding: 35px 35px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 250px;
`;

const asf = (props) => {
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
      <Container maxWidth="md">
        <Grid container spacing={2} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          {props.children}
        </Grid>
      </Container>
    </Div>
  );
}


export default asf;