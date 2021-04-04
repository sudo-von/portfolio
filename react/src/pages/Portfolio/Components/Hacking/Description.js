import React from 'react'
/* Material-ui components.*/
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import HighlightedText from '../../../../components/HighlightedText/'
import Small from '../../../../components/Small/'
import Hr from '../../../../components/Hr/'

const Hacking = ( { githubURL }, ...props ) => {

    const href = githubURL ? githubURL : 'https://github.com/sudo-von/capture-the-flag'
    
    return(
        <Grid item xs={12}>
            <HighlightedText><h2>Hacking ético</h2></HighlightedText>
            <p>Durante dos años he participado en múltiples eventos<br/>
            presenciales de seguridad informática a <HighlightedText>nivel nacional</HighlightedText> obteniendo los<br/>
            primeros lugares representando a mi universidad al vulnerar sistemas en ambientes controlados.</p>
            <p>También he participado en multiples eventos a <HighlightedText>nivel mundial</HighlightedText> en línea<br/>
            compitiendo contra miles de equipos y participantes entrando al top 100 sin contar con un equipo.
            </p>
            <Small>
                Visita mi perfil de&nbsp;
                <HighlightedText><a target='_blank' href={href}>Github</a></HighlightedText>
                &nbsp;donde encontrarás los pasos que seguí<br/>para resolver una gran variedad
                de retos de seguridad informática de los eventos<br/>
                mencionados previamente de categorías como seguridad web, forense, OSINT, ingeniería inversa, criptografía, etc...
            </Small>
            <br/><br/>
            <Small>
                También puedes hacer click en cada uno de los eventos mostrados abajo para ir a mi repositorio donde encontrarás
                la solución de sus retos.
            </Small>
            <Hr/>
        </Grid>
    )
}

export default Hacking