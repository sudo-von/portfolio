import React, { useState } from 'react'
/* Material-ui components. */
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
/* React-router. */
import { Link } from "react-router-dom"
/* Styled-components. */
import { useTheme } from 'styled-components'
/* Icons. */
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'

const Navside = () => {

  const currentTheme = useTheme()
  const styles = {
    link: {
      textDecoration: 'none',
      color: 'gray'
    },
    list: {
      width: 250
    },
    button: {
      color: currentTheme.text.color
    }
  }
  
  const [ open, setOpen ] = useState(false)
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setOpen(open)
  }

  return (
    <React.Fragment>
      <Button onClick={toggleDrawer(true)} style={styles.button} startIcon={<MenuIcon/>}>Menú</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List style={styles.list}>
            { [
                { name: 'Inicio', route: '/', icon: <HomeIcon/> },
                { name: 'Query', route: '/Query', icon: <QuestionAnswerIcon/> }
              ].map(({name, route, icon}, index) => (
              <Link style={styles.link} to={route} key={`${name}-${index}`}>
                <ListItem button>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={name}/>
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  )
}

export default Navside