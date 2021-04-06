import React, { useState, useEffect } from 'react'
/* Material-ui components. */
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';

const Success = ( { message, duration=4000, status } ) => {

  const [ open, setOpen ] = useState(false)
  useEffect( () => {
    console.log(message)
    if (message.length >= 1){
      setOpen(true)
    }
  }, [message])

  const handleClose = (e) => {
    setOpen(false)
  } 

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={handleClose}
      autoHideDuration={2000}
      key={'top, center'}
    >
      <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={status}>
        {message}
      </MuiAlert>
    </Snackbar>
  )
}

export default Success