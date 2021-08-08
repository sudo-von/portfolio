/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import Paginator from 'components/Paginator'
import Description from 'components/Description'
import ExperiencieCard from './Components/ExperiencieCard'
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
                <Description title='Experiencia' bold={true}>
                    <p>Durante 3 años he desarrollado proyectos<br/>
                    como desarrollador full stack para diversas empresas<br/>
                    con diferente giro de negocio.</p>
                    <p>Para lograr esto me he adaptado a diferentes tecnlogías<br/>
                    para cumplir los resultados esperados.</p>
                </Description>
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
                                <ExperiencieCard data={project}/>
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