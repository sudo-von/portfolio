import React from 'react'
/* Material-ui components. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import HighlightedText from '../Shared/HighlightedText'
import Container from './Container'
import Card from './Card'
import Hr from '../Shared/Hr'

const Projects = () => {

    /* TODO: Move this data to MongoDB, and then fetch the data using hooks. */
    const data = [
        { name: 'Biochem', technologies: 'LAMP stack, HTML, CSS, Bootstrap, JavaScript, JQuery', src: 'http://sudo-von.com/resources/projects/biochem.jpg'},
        { name: 'Implan', technologies: 'LAMP stack, HTML, CSS, Bootstrap, JavaScript, JQuery', src: 'http://sudo-von.com/resources/projects/implan.jpg'},
        { name: 'Proteg', technologies: 'LAMP stack, HTML, CSS, Materialize, Material-UI, NodeJS, ReactJS, ReactNative, Docker', src: 'http://sudo-von.com/resources/projects/proteg.jpg'},
        { name: 'Aeropuertos de Coahuila', technologies: 'LAMP stack, HTML, CSS, Materialize, JavaScript, JQuery', src: 'http://sudo-von.com/resources/projects/aero.jpg'},
        { name: 'Municipio de Saltillo', technologies: 'ReactJS, Material-UI', src: 'https://saltillo.gob.mx/wp-content/uploads/2019/09/LOGO-IMT.jpeg'},
        { name: 'Tredibus', technologies: 'Golang, Docker, DockerCompose', src: 'https://tredicom.com/img/main/tredibus.svg'},
    ]

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
                {data.map((project) => 
                    <Card data={project}/>
                )}
            </Grid>
        </Container>
    )
}

export default Projects