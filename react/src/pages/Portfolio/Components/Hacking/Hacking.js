/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import Description from 'components/Description'
import Paginator from 'components/Paginator'
import HackingCard from './components/HackingCard'
import Video from 'components/Video/Video'
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
        <Grid container alignItems='center' style={styles.upper.grid.container} spacing={2}>
            <Grid item xs={12} sm={12} md={5}>
                <Description title='Hacking ético' bold={true}>
                    <p>Durante 3 años he participado en múltiples
                    eventos de seguridad informática a nivel nacional
                    obteniendo los primeros lugares representando
                    a mi estado al vulnerar sistemas en ambientes
                    controlados teniendo también una participación
                    en la televisión nacional en <a href='http://facebook.com/TeleSaltillo/videos/destacan-alumnos-de-sistemas-de-la-uadec-en-concurso-nacional-como-hackers-%C3%A9tico/701925957401415/' target='_blank'>Tele Saltillo</a>.</p>
                    <p>Semanalmente participo en multiples eventos en
                    línea compitiendo contra cientos de equipos,
                    además, redacto los pasos a seguir para resolver
                    este tipo de desafíos y así contribuir a la comunidad.</p>
                </Description>
                <Video src='https://www.youtube.com/embed/2Qftkzf8VKI'/>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
                <Paginator 
                    error={error}
                    data={data} 
                    page={page} 
                    limit={limit}
                    handlePage={handlePage}>
                        { data.results && data.results.map(ctf => 
                            <Grid item key={ctf.id} xs={12} sm={6}>
                                <HackingCard data={ctf}/>
                            </Grid>
                        )}
                </Paginator>
            </Grid>
        </Grid>
    )
}

const styles = {
    lower : {
        grid : {
            container : {
                marginBottom: 150
            }
        }
    },
    upper : {
        grid : {
            container : {
                marginBottom: 100
            }
        }
    }
}

export default Hacking