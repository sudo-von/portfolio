/* Material-ui. */
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination'
/* High order components. */
import withLoading from 'hocs/withLoading'

const Paginator = ({ data : { total }, page, limit, handlePage, children}) =>
    <Grid container spacing={2}>
        {children}
        <Grid item xs={12}>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <Pagination count={Math.round(total/limit)} page={page} onChange={handlePage} variant='outlined'/>
            </Box>
        </Grid>
    </Grid>


export default withLoading(Paginator, 'Cargando...')