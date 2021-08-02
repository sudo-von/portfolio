import { useState, useEffect } from 'react'
/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import Carousel  from 'components/Carousel'
import H2 from 'components/H2/'
import Bold from 'components/Bold/'
import Card from './components/Card'

const Hacking = () => {

    const [ ctfs, setCtfs ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:3000/ctfs/von?limit=4&offset=${(currentPage*4)}`)
            .then(res => res.json())
            .then(res => setCtfs(res))
    }, [currentPage])

    return(
        <Grid container style={styles.grid.container}>
            <Grid item xs={12} sm={12} md={5}>
                <H2 style={styles.h2}><Bold>Hacking ético</Bold></H2>
                <p>Durante tres años he participado en múltiples<br/>
                eventos de seguridad informática a nivel nacional<br/>
                obteniendo los primeros lugares representando a mi<br/>
                estado al vulnerar sistemas en ambientes<br/>
                controlados teniendo también una participación en<br/>
                la televisión nacional en Tele Saltillo.</p>

                <p>Semanalmente participo en multiples eventos en<br/>
                línea compitiendo contra cientos de equipos,<br/>
                además, redacto los pasos a seguir para resolver<br/>
                este tipo de desafíos y así contribuir a la comunidad.</p>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
                <Carousel 
                    currentPage={currentPage}
                    onChange={(a) => setCurrentPage(a)}
                    autoPlay={false}
                    numberPages={ctfs.total/4}>
                    { ctfs.results && ctfs.results.map((ctf) => 
                        <Card data={ctf}/>
                    )}
                </Carousel>
            </Grid>
        </Grid>
    )
}

const styles = {
    grid : {
        container : {
            marginTop: 370,
            marginBottom: 370,
        }
    }
}

export default Hacking