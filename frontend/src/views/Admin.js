import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';
import {BrouserRouter as Router, Link} from 'react-router-dom';

// import axios from 'axios';





export default function Adlin() {



  // function onLogout(e) {
  //   e.preventDefault();
  //   axios.get('http://localhost:3012/api/logout')
  //     .then((response) => {
  //       console.log(response.data)
  //     });
  //   props.history.push('/Login')
  // }


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
           JWT
          </Typography>
          <Button variant="h6">
          {/* <Link >logout</Link> */}
        </Button >
        </Toolbar>
      </AppBar>
      
     


      <h1>Welcome Admin</h1>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));