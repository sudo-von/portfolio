import { Fragment } from 'react'
/* Material-ui. */
import { Drawer as MaterialDrawer } from '@material-ui/core/'

const Drawer = ( { open, toggleDrawer } ) => 
  <MaterialDrawer open={open} onClose={toggleDrawer(false)}>
    <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
    </div>
  </MaterialDrawer>

export default Drawer