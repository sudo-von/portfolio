import React from 'react'
/* Material-ui. */
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
/* Styled-components. */
import { useTheme } from 'styled-components'

const Loader = (...props) => {
    const currentTheme = useTheme()
    return (  
    <Grid container>
        <Grid item xs={12}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <CircularProgress size={100} color={currentTheme.navbar.background_color}/>
                <h4 style={{fontSize: '18px', fontWeight: '400', color: currentTheme.toggler.background_color}}>Cargando...</h4>
            </div>
        </Grid>
    </Grid>
  )
}

export default Loader