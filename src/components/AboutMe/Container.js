import React from 'react'
/* Material UI. */
import Grid from '@material-ui/core/Grid'
/* Animations. */
import Fade from 'react-reveal/Fade'

const styles = {
    grid: {
        container: {
            padding: '15px 35px',
            marginBottom: 100
        },
        item: {
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center'
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