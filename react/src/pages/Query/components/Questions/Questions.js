/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Animations. */
import Fade from 'react-reveal/Fade'
/* Custom components. */
import Card from './components/Card/'
/* Custom hooks. */
import { useFetch } from 'hooks/useFetch'

const Questions = () => {

    const { data } = useFetch('GET', 'http://192.168.0.3:3000/questions/von', {})
    const { total, results } = data
    console.log(total, results)

    return (
        <Fade left>
            <Grid container display='flex' alignItems='center' justify='center' spacing={2} style={styles.grid.container}>
                { results && results.map(answer => 
                    <Grid key={answer.id} item xs={12} sm={4} md={4}>
                        <Card data={answer}/>
                    </Grid>
                )}
            </Grid>
        </Fade>
    )
}

const styles = {
    grid : {
        container : {
            marginBottom: 150
        }
    }
}

export default Questions