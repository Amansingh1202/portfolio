import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]:{
      padding:60,
    },
    [theme.breakpoints.down('sm')]:{
      padding:10,
    },
  },
  h1:{
    [theme.breakpoints.up('sm')]:{
      fontSize:"70px",
      lineHeight:"1",
    },
    [theme.breakpoints.down('sm')]:{
      fontSize:"30px"
    },
    fontWeight:600
  },
  p:{
    [theme.breakpoints.up('sm')]:{
      paddingRight:"100px"
    },
    color:"#f3f2ed",
    lineHeight:1.5,
  }
  }));

export default function Introduction() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid pr={200} item lg={5} sm={12} md={5}>
        <h1 className={classes.h1}>Hello,I'm
          <br />
          Aman Singh
        </h1>
        <p className={classes.p}>
          I'm currently a third year computer engineering student from Mumbai University.I am a full stack developer and an AI enthusiast.I mostly use Vue.js and React.js for my frontend stuffs.For backend I usually prefer Flask,Django or Nodejs.
        </p>
      </Grid>
      <Grid item lg={7} sm={12} md={7}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas obcaecati praesentium eum quos est molestiae vitae veritatis libero ipsum perferendis doloremque suscipit assumenda atque provident, quod dicta optio nesciunt. Commodi!
      </Grid>
      </Grid>
  );
}
