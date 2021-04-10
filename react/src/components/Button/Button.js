import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

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
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function CircularIntegration(props) {

  const classes = useStyles()
  const buttonClassname = clsx({
    [classes.buttonSuccess]: props.loading,
  })

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          className={buttonClassname}
          disabled={props.loading}
          {...props }
        >
          {props.children}
        </Button>
        {props.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </div>
  );
}