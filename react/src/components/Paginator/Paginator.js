/* Material-ui. */
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Alert from '@material-ui/lab/Alert'
import Pagination from '@material-ui/lab/Pagination'
/* High order components. */
import withLoading from 'hocs/withLoading'
import withError from 'hocs/withError'

const Paginator = ({ data : { total }, page, limit, handlePage, children}) => {

    if(total == 0){
        return <Alert severity="info">No hay datos disponibles</Alert>
    }

    return(
        <Grid container spacing={2}>
            {children}
            <Grid item xs={12}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Pagination count={Math.round(total/limit)} page={page} onChange={handlePage} variant='outlined'/>
                </Box>
            </Grid>
        </Grid>
    )
}

export default withError(withLoading(Paginator, 'Cargando...'),' Ha ocurrido al cargar este apartado, intenta de nuevo más tarde')