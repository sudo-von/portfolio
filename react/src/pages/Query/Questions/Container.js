import React from 'react'
/* Material-ui components. */
import Grid from '@material-ui/core/Grid'

const Container = (props) => 
    <Grid item xs={12} md={8}>
        {props.children}
    </Grid>

export default Container