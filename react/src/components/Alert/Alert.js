import { useState } from 'react'
/* Material-ui components. */
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const Alert = ({ children, ...rest }) => {

  const [open, setOpen] = useState(true)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}anchorOrigin={{ vertical: 'top', horizontal: 'center'}}    >
        <MuiAlert onClose={handleClose} elevation={6} variant="filled" {...rest}>
            {children}
        </MuiAlert>
    </Snackbar>
  )
}

export default Alert 