import React from 'react'
/* Material-ui components. */
import Grid from '@material-ui/core/Grid'
/* Animations. */
import Fade from 'react-reveal/Fade'

const styles = {
    grid: {
        container: {
            margin: '50px 0 100px 0'
        },
        item: {
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
        }
    }
}

const Container = (props) => 
    <Fade left>
        <Grid container style={styles.grid.container}>
            <Grid item xs={12} style={styles.grid.item}>
                {props.children}
            </Grid>
        </Grid>
    </Fade>

export default Container