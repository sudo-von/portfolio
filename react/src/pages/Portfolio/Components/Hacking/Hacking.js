import React, { useState, useEffect } from 'react'
/* Material-ui components. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import Container from './Container'
import Loader from '../Shared/Loader'
import Card from './Card'
import Description from './Description'  

const Hacking = () => {

    const [ ctfs, setCTFS ] = useState([])
    const [ isFetching, setFetching ] = useState(true)
    useEffect(() => 
        {
            fetch('http://localhost:80/ctfs')
                .then(res => res.json())
                .then(ctfs => {
                    setCTFS(ctfs['results'])
                    setFetching(false)
                })
                .catch(err => {
                    console.log(err)
                    setFetching(false)
                })
        }, []
    )

    return(
        <Container>
            { /* Top. */ }
            <Description/>
            { /* Bottom. */ }
            <Grid item xs={12} sm={12} spacing={2} container>
                {
                    isFetching ? 
                    <Loader/> :
                    ctfs.map((ctf) => 
                        <Grid item xs={12} sm={4} key={ctf.id}>
                            <Card data={ctf}/>
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    )
}

export default Hacking