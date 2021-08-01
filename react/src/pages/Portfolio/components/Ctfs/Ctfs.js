import { useState, useEffect } from 'react'
/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import H2 from 'components/H2/'
import Bold from 'components/Bold/'
import Card from './components/Card/'

const Ctfs = () => {

    const [ ctfs, setCtfs ] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/ctfs/von?limit=4')
            .then(res => res.json())
            .then(res => setCtfs(res.results))
    }, [])

    return(
        <Grid container style={styles.grid.container}>
            <Grid item sm={12} xs={6} md={5}>
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
            <Grid item sm={12} xs={6} md={7}>
                <Grid container spacing={3}>
                    { ctfs.map((ctf) => 
                        <Grid item sm={12} xs={6} md={6}>
                            <Card data={ctf}/>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
}

const styles = {
    grid : {
        container : {
            marginTop: 370,
            marginBottom: 370,
            borderRadius: 15,
            padding: 50,
            color: 'black'
        }
    }
}

export default Ctfs