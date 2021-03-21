import React from 'react';
import Toggle from '../Themes/Toggler';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from './Container';
import { useTheme } from 'styled-components';

const Navbar = ({theme, themeToggler}) => {
  
  /* Get theme context. */
  const styles = useTheme();

  return (  
    <AppBar position='sticky'>
      <Container>
        <Toolbar>
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;