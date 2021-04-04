import React from 'react'
/* Custom components. */
import AboutMe from './Components/AboutMe/'
import Skills from './Components/Skills/'
import Projects from './Components/Projects/'
import Hacking from './Components/Hacking/'
import Navbar from '../../components/Navbar/'
/* Styles. */
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../themes/GlobalStyles'
import { lightTheme, darkTheme } from '../../themes/Themes'
import { useDarkMode } from '../../themes/useDarkMode'
/* Animations. */
import AOS from 'aos'
import 'aos/dist/aos.css'
/* Material-ui. */
import Container from '@material-ui/core/Container'

const Portfolio = () => {

  /* Initialize AOS which will be used for animations. */
  AOS.init()
  /* Custom hooks. */
  const [ theme, themeToggler ] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (  
    <ThemeProvider theme={themeMode}>      
      <GlobalStyles/>
      <Navbar theme={theme} themeToggler={themeToggler}/>
      <Container maxWidth="md" style={{padding: '0 20px'}}>
        { /* Sections from the main page. */ }
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Hacking/>
      </Container>
    </ThemeProvider>
  )
}

export default Portfolio