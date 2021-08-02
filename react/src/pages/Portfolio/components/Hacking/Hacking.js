/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import H2 from 'components/H2/'
import Bold from 'components/Bold/'
import Repositories from './components/Repositories'

const Hacking = () =>
    <Grid container style={styles.grid.container}>
        <Grid item xs={12} sm={12} md={5}>
            <H2><Bold>Hacking ético</Bold></H2>
            <p>Durante tres años he participado en múltiples<br/>
            eventos de seguridad informática a nivel nacional<br/>
            obteniendo los primeros lugares representando a mi<br/>
            estado al vulnerar sistemas en ambientes<br/>
            controlados teniendo también una participación en<br/>
            la televisión nacional en <a href='' target='_blank'>Tele Saltillo</a>.</p>
            <p>Semanalmente participo en multiples eventos en<br/>
            línea compitiendo contra cientos de equipos,<br/>
            además, redacto los pasos a seguir para resolver<br/>
            este tipo de desafíos y así contribuir a la comunidad.</p>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
            <Repositories/>
        </Grid>
    </Grid>

const styles = {
    grid : {
        container : {
            marginTop: 150,
            marginBottom: 150,
        }
    }
}

export default Hacking