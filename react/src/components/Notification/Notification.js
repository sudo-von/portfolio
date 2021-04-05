import React, { useState, useEffect } from 'react'
/* Material-ui components. */
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';

const Success = ( { message, duration, status } ) => {

  const [ state, setState ] = useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  })

  const [showMessage, setShowMessage] = useState(true);
  useEffect(() => {
    if (message.length > 0) {
      setShowMessage(true);
    }
  }, [message]);

  const { vertical, horizontal, open } = state

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState })
  }

  
  const handleClose = () => {
    setShowMessage(false)
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={showMessage}
      onClose={handleClose}
      autoHideDuration={6000}
      key={vertical + horizontal}
    >
      <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={status}>
        {message}
      </MuiAlert>
    </Snackbar>
  )
}

export default Success