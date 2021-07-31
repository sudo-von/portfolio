import { useState, useEffect } from 'react'
/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import H2 from 'components/H2/'
import Card from './components/Card/'

const Projects = () => {

    const [ projects, setProjects ] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/projects/von')
            .then(res => res.json())
            .then(res => setProjects(res.results))
    }, [])

    return(
        <Grid container style={styles.grid.container}>
            <Grid item>
                <H2 style={styles.h2}>Proyectos</H2>
                <p>Durante 3 años he desarrollado proyectos como desarrollador full stack <br/>
                para diversas empresas con diferente giro de negocio. <br/>
                Para lograr esto me he adaptado a diferentes tecnlogías para cumplir los <br/>
                resultados esperados.</p>
                <Grid container spacing={2}>
                    { projects.map((project) => 
                        <Grid item sm={12} xs={6} md={4}>
                            <Card data={project}/>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
}

const styles = {
    grid : {
        container : {
            marginTop: 370,
            marginBottom: 370,
            backgroundColor: '#0D0536',
            borderRadius: 15,
            padding: 50,
            color: 'white'
        }
    },
    h2: {
        color: 'white',
        fontWeight: 'bold'
    }
}

export default Projects