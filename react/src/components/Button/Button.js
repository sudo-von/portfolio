import React from 'react'
import clsx from 'clsx'
/* Material-ui. */
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress, Button } from '@material-ui/core/'
import { green } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  buttonProgress: {
    background: 'transparent',
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}))

export default function CircularIntegration( { children, pending, ...rest } ) {

  const classes = useStyles()
  const buttonClassname = clsx({
    [classes.buttonSuccess]: pending
  })

  return (
    <div className={classes.wrapper}>
      <Button
        variant="contained"
        color="primary"
        className={buttonClassname}
        disabled={pending}
        {...rest }
      >
        {children}
      </Button>
      {pending && <CircularProgress size={24} className={classes.buttonProgress} />}
    </div>
  )
}