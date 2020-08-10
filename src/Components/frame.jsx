import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
var matches = false;

const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
    padding: matches ? theme.spacing(0) : theme.spacing(4),
    paddingTop: theme.spacing(0),
    borderStyle: 'none',  
  },

  paper: {

    //padding: theme.spacing(0),
    textAlign: 'center',
    //color: theme.palette.text.secondary,
    borderStyle: 'none',   
  },
  rootmobile:{
    flexGrow: 1,
    padding: theme.spacing(0),
    paddingTop: theme.spacing(0),
    borderStyle: 'none', 
  }
}));

export default function AutoGrid() {
  const classes = useStyles();
  console.log(window.innerHeight)
  matches = useMediaQuery('(min-width:950px)');
  
  const h = matches ?   "100%":(window.innerHeight - (62*(window.innerHeight))/100)
  
  return (
    <div className={classes.base}>
      
        <div className= {
                    (isMobile) ? classes.rootmobile : classes.root
                  }>
          
          <Grid container spacing={0}>
                <Grid item xs={12}>
                  <h3>Title</h3>
                </Grid>
                <Grid item xs={12} md={9}  border={0}>
                       
                        <div
                                  className="video"
                                  style={{
                                    position: "relative",
                                    paddingBottom: "56.25%" /* 16:9 */,
                                    paddingTop:0,
                                    height: 0
                                  }}
                                >
                                  <iframe
                                    style={{
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      width: "100%",
                                      height: "100%"
                                    }}
                                    src={`https://player.vimeo.com/video/347119375`}
                                    frameBorder="0"
                                  />
                                </div>
                </Grid>
                <Grid item xs={12}  border={0} md={3}>
                <iframe src="https://vimeo.com/event/46413/chat/" width="100%" height={h} frameborder="0"></iframe>
                </Grid>
                <Grid item xs={12}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Grid>
          </Grid>
          
        </div>
    </div>
        
  
  );
}