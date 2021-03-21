import React from 'react'
import Container from './Container';
import HighlightedText from '../Shared/HighlightedText';
import Small from '../Shared/Small';
import Hr from '../Shared/Hr';
import Card from './Card'
import Grid from '@material-ui/core/Grid'
  
const Hacking = () => {

    const github = 'https://github.com/sudo-von';
    /* CTFS in which i have participated. */
    /* TODO: Move this data to a database to fetch the data and store it using hooks. */
    const data = [
        { name: 'CTF', categories: 'Web, Forensics, Reverse engineering, OSINT', url: 'https://pbs.twimg.com/profile_images/1085658905009520640/s4_cRLYH_400x400.jpg'},
        { name: 'CTF', categories: 'Web, Forensics, Reverse engineering, OSINT', url: 'https://pbs.twimg.com/profile_images/1085658905009520640/s4_cRLYH_400x400.jpg'},
        { name: 'CTF', categories: 'Web, Forensics, Reverse engineering, OSINT', url: 'https://pbs.twimg.com/profile_images/1085658905009520640/s4_cRLYH_400x400.jpg'},
        { name: 'CTF', categories: 'Web, Forensics, Reverse engineering, OSINT', url: 'https://pbs.twimg.com/profile_images/1085658905009520640/s4_cRLYH_400x400.jpg'},
        { name: 'CTF', categories: 'Web, Forensics, Reverse engineering, OSINT', url: 'https://pbs.twimg.com/profile_images/1085658905009520640/s4_cRLYH_400x400.jpg'},
        { name: 'CTF', categories: 'Web, Forensics, Reverse engineering, OSINT', url: 'https://pbs.twimg.com/profile_images/1085658905009520640/s4_cRLYH_400x400.jpg'},
        { name: 'CTF', categories: 'Web, Forensics, Reverse engineering, OSINT', url: 'https://pbs.twimg.com/profile_images/1085658905009520640/s4_cRLYH_400x400.jpg'},
        { name: 'CTF', categories: 'Web, Forensics, Reverse engineering, OSINT', url: 'https://pbs.twimg.com/profile_images/1085658905009520640/s4_cRLYH_400x400.jpg'},
        { name: 'CTF', categories: 'Web, Forensics, Reverse engineering, OSINT', url: 'https://pbs.twimg.com/profile_images/1085658905009520640/s4_cRLYH_400x400.jpg'},
        { name: 'CTF', categories: 'Web, Forensics, Reverse engineering, OSINT', url: 'https://pbs.twimg.com/profile_images/1085658905009520640/s4_cRLYH_400x400.jpg'},
        { name: 'CTF', categories: 'Web, Forensics, Reverse engineering, OSINT', url: 'https://pbs.twimg.com/profile_images/1085658905009520640/s4_cRLYH_400x400.jpg'},
        { name: 'CTF', categories: 'Web, Forensics, Reverse engineering, OSINT', url: 'https://pbs.twimg.com/profile_images/1085658905009520640/s4_cRLYH_400x400.jpg'},
    ]
    return(
        <Container>
            { /* Left container. */ }
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
                    <HighlightedText><a target='_blank' href={github}>Github</a></HighlightedText>
                    &nbsp;donde encontrarás los pasos que seguí<br/>para resolver una gran variedad
                    de retos de seguridad informática de los eventos<br/>
                    mencionados previamente de categorías como seguridad web, forense, ingeniería inversa, etc...
                </Small>
                <Hr/>
            </Grid>
            { /* Right container. */ }
            <Grid item xs={12} sm={6} spacing={1} container>
                {data.map((ctf) => 
                    <Grid item xs={12} sm={4}>
                        <Card data={ctf}/>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}

export default Hacking;