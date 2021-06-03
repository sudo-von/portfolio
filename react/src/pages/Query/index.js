import React from 'react'
/* Custom components. */
import Profile from './Profile/Profile'
import Questions from './Questions/Questions'
import Navbar from '../../components/Navbar/'
/* Material-ui. */
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const Query = ( { theme, themeToggler } ) =>
  <React.Fragment>      
    <Navbar theme={theme} themeToggler={themeToggler}/>
    <Container maxWidth="lg">
      <Grid container spacing={5}>
        <Profile/>
        <Questions/>
      </Grid>
    </Container>
  </React.Fragment>

export default Query