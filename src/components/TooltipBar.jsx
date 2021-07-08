import React, { useEffect } from 'react';
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
    if ( props.tooltip && props.tooltip.length > 0) {
      console.log("REACHED", props.tooltip.length);
      setOpen(true)
    }
  },[props.tooltip])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={`${classes.root} ${props.tooltip[2]}`}>
      <Snackbar open={open} autoHideDuration={100000} onClose={()=> {setOpen(false)}} disableWindowBlurListener={true}>
        <Alert onClose={handleClose} severity="info" className={props.tooltip[2]}>
          <b className={'tool-title'}>{props.title}</b>
          <br/>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}