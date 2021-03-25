import React from 'react'
/* Custom components. */
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills'
import Projects from '../Projects'
import Hacking from '../Hacking'
import Navbar from '../Navbar'
/* Styles. */
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../Themes/GlobalStyles'
import { lightTheme, darkTheme } from '../Themes/Themes'
import { useDarkMode } from '../Themes/useDarkMode'
/* Animations. */
import AOS from 'aos'
import 'aos/dist/aos.css'
/* Material-ui. */
import Container from '@material-ui/core/Container';

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
      { /* Sections from the main page. */ }
      <Container maxWidth="md">
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Hacking/>
      </Container>
    </ThemeProvider>
  )
}

export default Portfolio