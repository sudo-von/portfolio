import { useState, useEffect } from 'react'
/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import H2 from 'components/H2/'
import Bold from 'components/Bold/'
import Repositories from './components/Repositories'

const Experiencie = () =>
    <Grid container alignItems='center' style={styles.grid.container}>
        <Grid item xs={12} sm={12} md={5}>
            <H2><Bold>Experiencia</Bold></H2>
            <p>Durante 3 años he desarrollado proyectos<br/>
            como desarrollador full stack para diversas empresas<br/>
            con diferente giro de negocio.
            </p>
            <p>Para lograr esto me he adaptado a diferentes tecnlogías<br/>
            para cumplir los resultados esperados.</p>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
            <Repositories/>
        </Grid>
    </Grid>

const styles = {
    grid : {
        container : {
            marginTop: 350,
            marginBottom: 350
        }
    }
}

export default Experiencie