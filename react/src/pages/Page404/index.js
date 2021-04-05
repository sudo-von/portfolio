import React, { useEffect, useState, useContext } from 'react'
/* Custom components. */
import Navbar from '../../components/Navbar/'
/* Styles. */
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../themes/GlobalStyles'
import { lightTheme, darkTheme } from '../../themes/Themes'
import { useDarkMode } from '../../themes/useDarkMode'
/* Material-ui. */
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
/* React router. */
import { Link } from 'react-router-dom'

const Portfolio = () => <Link to='/' style={{textDecoration: 'none', marginRight: 20}}><h4>PORTAFOLIO</h4></Link>

const Page404 = () => {

  /* Theme hooks. */
  const [ theme, themeToggler ] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (  
    <ThemeProvider theme={themeMode}>      
      <GlobalStyles/>
      <Navbar theme={theme} themeToggler={themeToggler}>
        <Portfolio/>
      </Navbar>
      <Container maxWidth="lg" style={{height: '100%', padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyConter: 'center'}}>
        <img style={{borderRadius: 50}} src='https://24.media.tumblr.com/a8814ccdb9f7d73101456f999dd4000c/tumblr_mnra2yzVE51qhd8sao2_500.gif'/>
        <h1 style={{color: 'white'}}>Not found...</h1>
      </Container>
    </ThemeProvider>
  )
}

export default Page404