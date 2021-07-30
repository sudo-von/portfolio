import React from 'react'
/* Material-ui. */
import Container from '@material-ui/core/Container'
/* Custom components. */
import Navbar from 'components/Navbar/'
import Profile from './Components/Profile/'
import Projects from './Components/Projects/'

const Portfolio = () => 
  <Container>
    <Navbar/>
    <Profile/>
    <Projects/>
  </Container>

export default Portfolio