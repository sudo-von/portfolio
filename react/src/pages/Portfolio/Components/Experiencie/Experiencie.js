/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import H2 from 'components/H2/'
import Bold from 'components/Bold/'
import Paginator from 'components/Paginator'
import Card from './Components/Card'
/* Custom hooks. */
import { useFetch } from 'hooks/useFetch'

const Experiencie = () => {

    const { data, error, page, limit, handlePage } = useFetch({ 
        url: 'projects/username/von',
        requiredPaginate: true,
        currentPage: 1,
        currentLimit: 4
    })

    return(
        <Grid container alignItems='center' style={styles.grid.container}>
            <Grid item xs={12} sm={12} md={5}>
                <H2><Bold>Experiencia</Bold></H2>
                <p>Durante 3 años he desarrollado proyectos<br/>
                como desarrollador full stack para diversas empresas<br/>
                con diferente giro de negocio.</p>
                <p>Para lograr esto me he adaptado a diferentes tecnlogías<br/>
                para cumplir los resultados esperados.</p>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
                <Paginator 
                    error={error}
                    data={data} 
                    page={page} 
                    limit={limit}
                    handlePage={handlePage}>
                        { data.results && data.results.map(project => 
                            <Grid item key={project.id} xs={12} sm={6} md={6}>
                                <Card data={project}/>
                            </Grid>
                        )}
                </Paginator>
            </Grid>
        </Grid>
    )
}

const styles = {
    grid : {
        container : {
            marginTop: 350,
            marginBottom: 350
        }
    }
}

export default Experiencie