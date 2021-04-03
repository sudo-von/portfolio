import React from 'react';
/* Material-ui components. */
import Grid from '@material-ui/core/Grid';

const styles = {
  div: {
    flexGrow: 1,
    marginBottom: 150,
  }
}

const Container = (props) => {
  return(
    <div 
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'
        data-aos-mirror='true'
        data-aos-once='false'
        data-aos-anchor-placement='top-center' 
        style={styles.div}
    >
      <Grid container spacing={2}>
        {props.children}
      </Grid>
    </div>
  );
}


export default Container;