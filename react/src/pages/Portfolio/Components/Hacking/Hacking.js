import React from 'react'
/* Material-ui components. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import Container from './Container'
import Loader from '../../../../components/Loader/'
import Card from './Card'
import Description from './Description'  
/* Custom hooks. */
import useCtf from '../../../../hooks/useCtf/'

const Hacking = () => {

    const url = 'ctfs'
    const { data, isLoading } = useCtf(url)

    return(
        <Container>
            { /* Top. */ }
            <Description/>
            { /* Bottom. */ }
            <Grid item xs={12} sm={12} spacing={2} container>
                {
                    isLoading ? 
                    <Loader>Cargando repositorios...</Loader> :
                    data.map((ctf) => 
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