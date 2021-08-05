/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import Pagination from '@material-ui/lab/Pagination'
import Card from './components/Card'
import { Box } from '@material-ui/core'
/* High order components. */
import withLoading from 'hocs/withLoading'

const Questions = ({ questions : { results, total }, page, handlePage }) =>
    <Grid container spacing={2} style={styles.grid.container}>
        { results && results.map(answer => 
            <Grid item key={answer.id} xs={12} sm={4} md={4}>
                <Card data={answer}/>
            </Grid>
        )}
        <Box display='flex'flexGrow={1}flexDirection='row'justifyContent='center'alignItems='center'>
            <Pagination count={total/6} page={page} onChange={handlePage} variant='outlined'/>
        </Box>
    </Grid>

const styles = {
    grid : {
        container : {
            marginBottom: 150
        }
    }
}

export default withLoading(Questions, 'Cargando preguntas...')