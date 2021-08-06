import { useState } from 'react'
/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import H2 from 'components/H2/'
import Bold from 'components/Bold/'
import Repositories from './Components/Repositories'
/* Custom hooks. */
import { useFetch } from 'hooks/useFetch'

const Experiencie = () => {

    /* Pagination hook. */
    const [ page, setPage ] = useState(1)
    const handlePage = (event, value) => setPage(value)
    /* Data. */
    const { data, loading, error } = useFetch(`projects/username/von?limit=4&offset=${4*(page-1)}`)

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
                <Repositories 
                    error={error}
                    isLoading={loading} 
                    data={data} 
                    page={page} 
                    handlePage={handlePage}/>
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