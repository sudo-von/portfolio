import React from 'react'
/* Custom components. */
import Profile from './Profile/Profile'
import Questions from './Questions/Questions'
import Navbar from '../../components/Navbar/'
import NavbarRoute from '../../components/Navbar/Components/NavbarRoute'
/* Material-ui. */
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const Query = ( { theme, themeToggler } ) => {

  return (  
    <React.Fragment>      
      <Navbar theme={theme} themeToggler={themeToggler}>
        <NavbarRoute to='' name='Portafolio'/>
      </Navbar>
      <Container maxWidth="lg" style={{padding: '0 20px'}}>
        <Grid container spacing={5}>
          <Profile/>
          <Questions/>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Query