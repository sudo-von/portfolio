import React from 'react'
/* Custom components. */
import AboutMe from './Components/AboutMe/'
import Skills from './Components/Skills/'
import Projects from './Components/Projects/'
import Hacking from './Components/Hacking/'
import Navbar from '../../components/Navbar/'
import NavbarRoute from '../../components/Navbar/Components/NavbarRoute'
/* Animations. */
import AOS from 'aos'
import 'aos/dist/aos.css'
/* Material-ui. */
import Container from '@material-ui/core/Container'

const styles = {
  container: {
    padding: '0 20px'
  }
}

const Portfolio = ( { theme, themeToggler } ) => {

  /* Initialize AOS which will be used for animations. */
  AOS.init()

  return (  
    <div>      
      <Navbar theme={theme} themeToggler={themeToggler}>
        <NavbarRoute to='Query' name='Query'/>
      </Navbar>
      <Container maxWidth="md" style={styles.container}>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Hacking/>
      </Container>
    </div>
  )
}

export default Portfolio