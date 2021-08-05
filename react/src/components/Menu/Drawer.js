/* Material-ui. */
import { Drawer as MaterialDrawer } from '@material-ui/core/'
import HomeIcon from '@material-ui/icons/Home'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
/* React-router-dom. */
import { Link } from 'react-router-dom'

const Drawer = ( { open, toggleDrawer } ) => {

  const pages = [
    {
      name: 'Inicio',
      path: '/',
      icon: <HomeIcon/>
    },
    {
      name: 'Query',
      path: '/query',
      icon: <QuestionAnswerIcon/>
    }
  ]
  
  return(
    <MaterialDrawer open={open} onClose={toggleDrawer(false)}>
      <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} style={{width: 250}}>
      <List>
        {pages.map(({name, path, icon}) => (
          <Link to={path} key={name}>
            <ListItem button key={name}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name}/>
            </ListItem>
          </Link>
        ))}
      </List>
      </div>
    </MaterialDrawer>
  )
}

export default Drawer