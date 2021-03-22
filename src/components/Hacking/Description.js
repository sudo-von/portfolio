import React from 'react'
import HighlightedText from '../Shared/HighlightedText'
import Small from '../Shared/Small'
import Hr from '../Shared/Hr'
import Grid from '@material-ui/core/Grid'
  
const Hacking = ( { githubURL }, ...props ) => {
    const href = githubURL ? githubURL : 'https://github.com/sudo-von/capture-the-flag'
    return(
        <Grid item xs={12} sm={5}>
            <HighlightedText><h2>Hacking ético</h2></HighlightedText>
            <p>Durante dos años he participado en múltiples eventos de<br/>
            seguridad informática a <HighlightedText>nivel nacional</HighlightedText> obteniendo los primeros<br/>
            lugares vulnerando sistemas en ambientes controlados.</p>
            <p>También he participado en multiples eventos a <HighlightedText>nivel mundial</HighlightedText> en línea
            compitiendo contra miles de participantes y equipos entrando al top 100 sin contar con un equipo.
            </p>
            <Small>
                Visita mi perfil de&nbsp;
                <HighlightedText><a target='_blank' href={href}>Github</a></HighlightedText>
                &nbsp;donde encontrarás los pasos que seguí<br/>para resolver una gran variedad
                de retos de seguridad informática de los eventos<br/>
                mencionados previamente de categorías como seguridad web, forense, OSINT, ingeniería inversa, criptografía, etc...
            </Small>
            <Hr/>
        </Grid>
    )
}

export default Hacking