import React from 'react';
import Container from './Container';
import Graphs from './Graphs';
import Hr from '../Shared/Hr';
import HighlightedText from '../Shared/HighlightedText';
import Small from '../Shared/Small';
import Grid from '@material-ui/core/Grid';

const Skills = () => {

    const linkedin = 'https://www.linkedin.com/in/jes%C3%BAs-%C3%A1ngel-rodr%C3%ADguez-mart%C3%ADnez-84991a1b4/';

    return(
        <Container>
            <Grid container spacing={5}>
                { /* Left container. */}
                <Grid item xs={12} sm={5}>
                    <HighlightedText>
                        <h2>Habilidades &<br/>Experiencia</h2>
                    </HighlightedText>
                    <p>Basado en mi experiencia como desarrollador,<br/>
                    mi área de expertise se centra en el front end development,<br/>
                    sin embargo, también he desarrollado proyectos como full stack developer.</p>
                    <Small>
                        Visita mi perfil de&nbsp;
                        <a target='_blank' href={linkedin}>Linkedin</a>
                        &nbsp;donde podrás ponerte en contacto conmigo
                        <br/>para obtener más detalles.
                    </Small>
                    <Hr/>
                </Grid>
                { /* Right container. */}
                <Grid item xs={12} sm={7}>
                    <Graphs/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Skills;