/* Material-ui. */
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
/* Custom components. */
import Pagination from '@material-ui/lab/Pagination'
import QuestionCard from './QuestionCard'
/* High order components. */
import withLoading from 'hocs/withLoading'
import withError from 'hocs/withError'

const Questions = (props) => {
    
    const { questions, page, handlePage } = props
    const { results, total } = questions

    return(
        <Grid container spacing={2} style={styles.grid.container}>
            { results && results.map(question => 
                <Grid item key={question.id} xs={12} sm={4} md={4}>
                    <QuestionCard data={question}/>
                </Grid>
            )}
            <Box display='flex' flexGrow={1} flexDirection='row' justifyContent='center' alignItems='center'>
                <Pagination count={total/6} page={page} onChange={handlePage} variant='outlined'/>
            </Box>
        </Grid>
    )
}

const styles = {
    grid : {
        container : {
            marginBottom: 200
        }
    }
}

export default withError(withLoading(Questions, 'Cargando preguntas...'),'Algo salió mal al cargar las preguntas...')