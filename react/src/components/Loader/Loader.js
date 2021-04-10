import React from 'react'
/* Material-ui. */
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
/* Styled-components. */
import { useTheme } from 'styled-components'

const Loader = (props) => {
    const currentTheme = useTheme()
    return (  
    <Grid container>
        <Grid item xs={12}>
            <div style={{height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress size={100} color="inherit"/>
                <h4 style={{fontSize: '18px', fontWeight: '400'}}>{props.children}</h4>
            </div>
        </Grid>
    </Grid>
  )
}

export default Loader