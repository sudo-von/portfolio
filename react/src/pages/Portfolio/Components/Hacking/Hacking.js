/* Material-ui. */
import Grid from '@material-ui/core/Grid'
import {Card as Cardo} from '@material-ui/core'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
/* Custom components. */
import Description from 'components/Description'
import Paginator from 'components/Paginator'
import H2 from 'components/H2'
import Bold from 'components/Bold'
import Card from './components/Card'
/* Custom hooks. */
import { useFetch } from 'hooks/useFetch'

const Hacking = () => {

    const { data, error, page, limit, handlePage } = useFetch({ 
        url: 'ctfs/username/von',
        requiredPaginate: true,
        currentPage: 1,
        currentLimit: 4
    })

    return(
        <Grid container alignItems='center' style={styles.grid.container}>
            <Grid item xs={12} sm={12} md={5}>
                <Description title='Hacking ético' bold={true}>
                    <p>Durante 3 años he participado en múltiples<br/>
                    eventos de seguridad informática a nivel nacional<br/>
                    obteniendo los primeros lugares representando<br/>
                    a mi estado al vulnerar sistemas en ambientes<br/>
                    controlados teniendo también una participación<br/>
                    en la televisión nacional en <a href='http://facebook.com/TeleSaltillo/videos/destacan-alumnos-de-sistemas-de-la-uadec-en-concurso-nacional-como-hackers-%C3%A9tico/701925957401415/' target='_blank'>Tele Saltillo</a>.</p>
                    <p>Semanalmente participo en multiples eventos en<br/>
                    línea compitiendo contra cientos de equipos,<br/>
                    además, redacto los pasos a seguir para resolver<br/>
                    este tipo de desafíos y así contribuir a la comunidad.</p>
                </Description>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
                <Cardo>
            <CardActionArea>
                <CardMedia
                    component='iframe'
                    style={{height: 400, width: '100%', borderRadius: 2, border: 0}}
                    src="https://www.youtube.com/embed/2Qftkzf8VKI"
                    title='title'
                    controls
                />
            </CardActionArea>
            </Cardo>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
                <Paginator 
                    error={error}
                    data={data} 
                    page={page} 
                    limit={limit}
                    handlePage={handlePage}>
                        { data.results && data.results.map(ctf => 
                            <Grid item key={ctf.id} xs={12} sm={6} md={6}>
                                <Card data={ctf}/>
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
            marginTop: 150,
            marginBottom: 300,
        }
    }
}

export default Hacking