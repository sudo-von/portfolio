/* Custom components. */
import Card from '../Card'
/* Material-ui. */
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination'
/* High order components. */
import withLoading from 'hocs/withLoading'

const Repositories = (props) => {

    const { data, page, handlePage } = props
    const { results, total } = data

    return(
        <Grid container spacing={2}>
            { results && results.map(repository => 
                <Grid item key={repository.id} xs={12} sm={6} md={6}>
                    <Card data={repository}/>
                </Grid>
            )}
            <Box display='flex' flexGrow={1} flexDirection='row' justifyContent='center' alignItems='center'>
                <Pagination count={total/4} page={page} onChange={handlePage} variant='outlined'/>
            </Box>
        </Grid>
    )
}

export default withLoading(Repositories, 'Cargando proyectos...')