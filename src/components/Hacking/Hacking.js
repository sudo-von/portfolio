import React from 'react'
import Container from './Container'
import Card from './Card'
import Grid from '@material-ui/core/Grid'
import Description from './Description'  

const Hacking = () => {

    /* CTFS in which i have participated. */
    /* TODO: Move this data to a database to fetch the data and store it using hooks. */
    const data = [
        { name: '0XL4UGHCTF-2021', categories: 'Web, Forensics, Reverse engineering', github_url: 'https://github.com/sudo-von/capture-the-flag/tree/master/0XL4UGHCTF-2021', img_url: 'https://camo.githubusercontent.com/1177fec4c4991a029817617ab2cd12698796a35bf312ded544f75c17be2cbf83/68747470733a2f2f7062732e7477696d672e636f6d2f70726f66696c655f696d616765732f313334363932343438313532313030343534352f5758444d5332692d5f343030783430302e6a7067'},
        { name: 'ANGSTRONG-2020', categories: 'Web, Forensics, Reverse engineering', github_url: 'https://github.com/sudo-von/capture-the-flag/tree/master/ANGSTRONG-2020', img_url: 'https://avatars.githubusercontent.com/u/11710590?s=280&v=4'},
        { name: 'B01LERS-BOOTCAMP-2020', categories: 'Web', github_url: 'https://github.com/sudo-von/capture-the-flag/tree/master/B01LERS-BOOTCAMP-2020', img_url: 'https://ctftime.org/media/events/b01lers-logo.png'},
        { name: 'CSIRT-PONAL-2020', categories: 'Crypto, Forensics, Stego, Trivia', github_url: 'https://github.com/sudo-von/capture-the-flag/tree/master/CSIRT-PONAL-2020', img_url: 'https://i.pinimg.com/originals/10/44/59/10445987c156d0937ec3a996a5e283b1.png'},
        { name: 'CTFLEARN-2020', categories: 'Web, Forensics', github_url: 'https://github.com/sudo-von/capture-the-flag/tree/master/CTFLEARN-2020', img_url: 'https://pbs.twimg.com/profile_images/1085658905009520640/s4_cRLYH.jpg'},
        { name: 'DAMCTF-2020', categories: 'Web', github_url: 'https://github.com/sudo-von/capture-the-flag/tree/master/DAMCTF-2020', img_url: 'https://ctftime.org/media/events/DAM-CTF-2020-Icon-WideBorder.png'},
        { name: 'DARKCTF-2020', categories: 'Web, Forensics', github_url: 'https://github.com/sudo-von/capture-the-flag/tree/master/DARKCTF-2020', img_url: 'https://avatars.githubusercontent.com/u/67113316?s=400&v=4'},
        { name: 'DVCTF-2021', categories: 'Web, Stego', github_url: 'https://github.com/sudo-von/capture-the-flag/tree/master/DVCTF-2021', img_url: 'https://ctftime.org/media/events/davincictf.png'},
        { name: 'HACKDEF-QUALS-2020-MEXICO', categories: 'Web, Crypto, Pwning, Reverse engineering', github_url: 'https://github.com/sudo-von/capture-the-flag/tree/master/HACKDEF-QUALS-2020-MEXICO', img_url: 'https://pbs.twimg.com/profile_images/836074595899731968/rzXVnbgh_400x400.jpg'},
        { name: 'HACKTIVITYCON-2020', categories: 'Web, Forensics, Stego, Warmups', github_url: 'https://github.com/sudo-von/capture-the-flag/tree/master/HACKTIVITYCON-2020', img_url: 'https://hacktivity.com/wp-content/uploads/2019/09/ctf_web-292x292.png'},
        { name: 'NAHAMCON-2021', categories: 'Web, Warmups', github_url: 'https://github.com/sudo-von/capture-the-flag/tree/master/NAHAMCON-2021', img_url: 'https://johnhammond.org/static/misc/naham_banner.png'},
        { name: 'RIFT-2020', categories: 'Web, Crypto, Forensics, OSINT, Stego, Reverse engineering', github_url: 'https://github.com/sudo-von/capture-the-flag/tree/master/RIFT-2020', img_url: 'https://gug.wtf/content/images/2020/03/riftCTF-16.png'},
        { name: 'TEAMH4CCTF-2020', categories: 'Crypto, Forensics', github_url: 'https://github.com/sudo-von/capture-the-flag/tree/master/TEAMH4CCTF-2020', img_url: 'https://ctftime.org/media/events/ctf8.PNG'},
        { name: 'TETCTF-2021', categories: 'Web', github_url: 'https://github.com/sudo-von/capture-the-flag/tree/master/TETCTF-2021', img_url: 'https://ctftime.org/media/team/tet.png'},
    ]
    return(
        <Container>
            { /* Left container. */ }
            <Description/>
            { /* Right container. */ }
            <Grid item xs={12} sm={12} spacing={2} container>
                {data.map((ctf) => 
                    <Grid item xs={12} sm={4}>
                        <Card data={ctf}/>
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}

export default Hacking