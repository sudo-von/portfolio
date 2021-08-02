import { Fragment } from 'react'
/* Custom components. */
import Button from 'components/Button'
import Icon from 'components/Icon'
import Drawer from './Drawer'
/* Assets. */
import { ReactComponent as MenuSvg } from 'assets/svg/menu.svg'
/* Hooks. */
import useToggler from 'hooks/useToggler'

const Menu = () => {

  const { open, toggleDrawer } = useToggler()

  return (
    <Fragment>
      <Button
        onClick={toggleDrawer(true)} 
        startIcon={
          <Icon size={33} svg={<MenuSvg/>}/>
        }>
        Menú
      </Button>
      <Drawer open={open} toggleDrawer={toggleDrawer}/>
    </Fragment>
  )
}

export default Menu