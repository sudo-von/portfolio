import React from 'react'
import Toggle from '../Themes/Toggler'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from './Container'
import { useTheme } from 'styled-components'
/* Icons. */
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const styles = {
  appbar: {
    background: 'transparent',
    boxShadow: 'none'
  },
  a: {
    margin: '0 20px 0 10px',
  }
}

const Navbar = ({theme, themeToggler}) => {

  return (  
    <AppBar position='sticky' style={styles.appbar}>
      <Container>
        <Toolbar>
          <a style={styles.a} href="https://www.twitter.com/sudo_von" target="_blank"><TwitterIcon/></a>
          <a style={styles.a} href="https://github.com/sudo-von" target="_blank"><GitHubIcon/></a>
          <a style={styles.a} href="https://www.linkedin.com/in/jes%C3%BAs-%C3%A1ngel-rodr%C3%ADguez-mart%C3%ADnez-84991a1b4/" target="_blank"><LinkedInIcon/></a>
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar