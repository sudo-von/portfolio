import React, { useState } from 'react'
/* Material-ui components. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import Container from './Container'
import Card from './Card'
import Description from './Description'  

const Hacking = () => {

    const [ data, setData ] = useState([]);
    const test = () => fetch('http://localhost:80/ctfs').then((result) => result.json()).then((res) => setData(res['results'])).catch((err) => console.log(err));

    return(
        <Container>
            { /* Top. */ }
            <Description/>
            { /* Bottom. */ }
            <Grid item xs={12} sm={12} spacing={2} container>
                {data.map((ctf) => 
                    <Grid item xs={12} sm={4}>
                        <Card data={ctf}/>
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}

export default Hacking