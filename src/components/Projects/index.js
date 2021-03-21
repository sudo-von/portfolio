import React from 'react';
import Grid from '@material-ui/core/Grid';
import HighlightedText from '../Shared/HighlightedText';
import Container from './Container';
import Card from './Card';
import Hr from '../Shared/Hr';

const Projects = () => {

    /* Corporate projects. */
    /* TODO: Move this data to a database to fetch the data and store it using hooks. */
    const data = [
        { name: 'Biochem', technologies: 'LAMP stack, HTML, CSS, Bootstrap, JavaScript, JQuery', url: 'http://sudo-von.com/resources/projects/biochem.jpg'},
        { name: 'Implan', technologies: 'LAMP stack, HTML, CSS, Bootstrap, JavaScript, JQuery', url: 'http://sudo-von.com/resources/projects/implan.jpg'},
        { name: 'Proteg', technologies: 'LAMP stack, HTML, CSS, Materialize, Material-UI, Node, React, ReactNative, Docker', url: 'http://sudo-von.com/resources/projects/proteg.jpg'},
        { name: 'Aeropuertos de Coahuila', technologies: 'LAMP stack, HTML, CSS, Materialize, JavaScript, JQuery', url: 'http://sudo-von.com/resources/projects/aero.jpg'},
    ];

    return(
        <Container>
            { /* Left container. */}
            <Grid item xs={12} sm={6} spacing={2} style={{display: 'flex', justifyContent: 'space-between'}} container>
                {data.map((project) => 
                    <Card data={project}/>
                )}
            </Grid>
            { /* Right container. */}
            <Grid item xs={12} sm={5}>
                <HighlightedText>
                    <h2>Proyectos empresariales</h2>
                </HighlightedText>
                <p>He desarrollado proyectos para las siguientes empresas.</p>
                <Hr/>
            </Grid>
        </Container>
    );
}

export default Projects;