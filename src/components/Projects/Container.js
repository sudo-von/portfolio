import React from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  div: {
    flexGrow: '1',
    padding: '35px 35px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '130px',
  }
}

const Container = (props) =>
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
    <Grid container spacing={5}>
      <Grid item xs={12}>
        {props.children}
      </Grid>
    </Grid>
  </div>


export default Container;