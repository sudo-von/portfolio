import React from 'react'
/* Material UI. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import HighlightedText from './HighlightedText'
import Title from '../Shared/Title'
import Small from '../Shared/Small'
/* Animations. */
import Fade from 'react-reveal/Fade'

const AboutMe = () => 
  <Fade left>
    <Grid container style={{padding: '15px 35px', marginBottom: 100}}>
      <Grid item xs={12}>
        <Title>Jesús Rodríguez</Title>
        <div style={{lineHeight: .4, fontSize: 20}}>
          <HighlightedText>Desarrollador web</HighlightedText> y de
          <HighlightedText> aplicaciones móviles</HighlightedText>.
          <p>Apasionado del <HighlightedText>hacking ético</HighlightedText>.</p>
        </div>
        <Small>“Con sacrificio puede ser que logres algo,<br/>
        pero sin sacrificio es seguro que no lograrás nada”.</Small>
      </Grid>
    </Grid>
  </Fade>

export default AboutMe