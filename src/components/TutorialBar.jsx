import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import Alert from "./Alert"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(()=>{
    setOpen(true)
  },[])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={()=> {setOpen(false)}}>
        <Alert onClose={handleClose} severity="info">
          { props.tutorial ? "Exiting tutorial mode" : "You've entered tutorial mode" }
          <br/>
          { props.tutorial ? null : "Click an item to find out more!" }
        </Alert>
      </Snackbar>
    </div>
  );
}