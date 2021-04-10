import React from 'react'
/* Material-ui components. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import HighlightedText from '../../../../components/HighlightedText/'
import Container from './Container'
import Card from './Card'
import Hr from '../../../../components/Hr/'
import Loader from '../../../../components/Loader/'
/* Custom hooks. */
import useData from '../../../../hooks/useData/'

const Projects = () => {

    const url = 'projects'
    const { data, isLoading } = useData(url)

    return(
        <Container>
            { /* Top. */}
            <Grid item xs={12}>
                <HighlightedText>
                    <h2>Proyectos empresariales</h2>
                </HighlightedText>
                <p>Durante el tiempo que he trabajado como desarrollador web<br/>
                he desarrollado proyectos para diversas empresas con diferente giro de negocio.<br/>
                Para lograr esto me he adaptado a diferentes tecnlogías para cumplir los resultados esperados.</p>
                <Hr/>
            </Grid>
            { /* Bottom. */}
            <Grid item xs={12} spacing={2} style={{marginTop: 2}} container>
                {
                    isLoading ? 
                    <Loader>Cargando proyectos...</Loader> :
                    data.map((project) => 
                        <Card data={project} key={project.id}/>
                    )
                }
            </Grid>
        </Container>
    )
}

export default Projects