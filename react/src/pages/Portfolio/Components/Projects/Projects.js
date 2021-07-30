/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import H2 from 'components/H2/'
import Bold from 'components/Bold/'

const Projects = () => 
    <Grid container style={styles.grid.container}>
        <Grid item>
            <H2>Proyectos</H2>
            <p>Durante 3 años he desarrollado proyectos como desarrollador full stack <br/>
            para diversas empresas con diferente giro de negocio. <br/>
            Para lograr esto me he adaptado a diferentes tecnlogías para cumplir los <br/>
            resultados esperados.</p>
        </Grid>
    </Grid>

const styles = {
    grid : {
        container : {
            marginTop: 250,
            marginBottom: 250,
            backgroundColor: '#0D0536',
            borderRadius: 15,
            padding: 50,
            color: 'white'
        }
    }
}

export default Projects