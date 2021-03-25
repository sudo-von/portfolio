import React from 'react'
/* Custom components. */
import Container from './Container'
import Graphs from './Graphs'
import Hr from '../Shared/Hr'
import HighlightedText from '../Shared/HighlightedText'
import Small from '../Shared/Small'

const Skills = ({ linkedin }, ...props ) => {
    const href = linkedin ? linkedin : 'https://www.linkedin.com/in/jes%C3%BAs-%C3%A1ngel-rodr%C3%ADguez-mart%C3%ADnez-84991a1b4/'
    /* TODO: Move this data to MongoDB, and then fetch the data using hooks. */
    const data = {
        nodes: [
            { id: 1, label: 'Javascript'},
            { id: 2, label: 'React'},
            { id: 3, label: 'React Native'},
            { id: 4, label: 'NPM'},
            { id: 5, label: 'JQuery'},
            { id: 6, label: 'Webpack'},
            { id: 7, label: 'Vue'},
            { id: 8, label: 'NodeJS'},
            { id: 9, label: 'Express'},
            { id: 10, label: 'CSS' },
            { id: 11, label: 'SASS'},
            { id: 12, label: 'Docker'},
            { id: 13, label: 'DockerCompose'},
            { id: 14, label: 'Git'},
            { id: 15, label: 'Golang'},
            { id: 16, label: 'PHP'},
            { id: 17, label: 'Python'},
            { id: 18, label: 'Flask'}
        ],
        edges: [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 1, to: 4 },
            { from: 1, to: 5 },
            { from: 1, to: 6 },
            { from: 1, to:7 },
            { from: 8, to: 9},
            { from: 9 },
            { from: 10, to: 11},
            { from: 12, to: 13},
            { from: 14 },
            { from: 15 },
            { from: 16 },
            { from: 17, to: 18 }
        ]
    }

    return(
        <Container>
            { /* Top */ }
            <HighlightedText>
                <h2>Habilidades &<br/>Experiencia</h2>
            </HighlightedText>
            <p>Basado en mi experiencia como desarrollador,<br/>
            mi área de expertise se centra en el front end development,<br/>
            sin embargo, también desarrollo proyectos como full stack developer.</p>
            { /* Graphs, nodes and edges. */ }
            <Graphs data={data}/>
            { /* Bottom. */ }
            <Small>
                Visita mi perfil de&nbsp;
                <a target='_blank' href={href}>Linkedin</a>
                &nbsp;donde podrás ponerte en contacto conmigo
                <br/>para obtener más detalles.
            </Small>
            <Hr/>
        </Container>
    )
}

export default Skills