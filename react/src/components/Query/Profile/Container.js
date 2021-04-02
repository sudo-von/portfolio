import React from 'react'
/* Material-ui components. */
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const styles = {
    grid: {
        item: {
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center'
        }
    }
}

const Container = (props) => 
    <Grid item xs={12} md={4}>
        <Card>
            <CardContent style={styles.grid.item}>
                {props.children}
            </CardContent>
        </Card>
    </Grid>

export default Container