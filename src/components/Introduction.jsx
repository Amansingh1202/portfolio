import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Projects from "../components/Projects";
import Internships from "../components/Internships";
import ContactMe from "./ContactMe";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      padding: 60,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 10,
    },
  },
  h1: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "70px",
      lineHeight: "1",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
    fontWeight: 600,
  },
  p: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: "100px",
    },
    color: "#f3f2ed",
    lineHeight: 1.5,
    textAlign: "justify",
  },
  buttonStyle1: {
    backgroundColor: "#121212",
    color: "gray",
    border: "none",
    letterSpacing: "3px",
    marginTop: "10px",
    "&:hover": {
      color: "lightblue",
    },
  },
  buttonStyle2: {
    backgroundColor: "#121212",
    color: "white",
    border: "none",
    letterSpacing: "3px",
    marginTop: "10px",
    outline: "none",
    [theme.breakpoints.down("sm")]: {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.up("sm")]: {
      transform: "scale(1.3)",
    },
  },
  spacer: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "30px",
    },
  },
  svg1: {
    stroke: "gray",
    strokeWidth: 3,
  },
  svg2: {
    stroke: "white",
    strokeWidth: 3,
  },
  internship: {
    color: "lightblue",
  },
}));

export default function Introduction() {
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid pr={200} item lg={5} sm={12} md={5}>
        <h1 className={classes.h1}>
          Hello,I'm
          <br />
          Aman Singh
        </h1>
        <p className={classes.p}>
          I'm a third year computer engineering student from Mumbai University.I
          am a full stack developer and an AI enthusiast.I mostly use Vue.js and
          React.js for my frontend stuffs.For backend I usually prefer
          Flask,Django,Nodejs or Golang.{" "}
          <span className={classes.internship}>
            Currently,I am looking for Internship opportunities or freelancing
            jobs.
          </span>
        </p>
        <p className={classes.spacer}>
          <button
            onClick={() => {
              setButton1(true);
              setButton2(false);
              setButton3(false);
            }}
            className={button1 ? classes.buttonStyle2 : classes.buttonStyle1}
            style={{ marginTop: "50px" }}
          >
            01
            <svg height="5" width="70">
              <line
                x1="10"
                y1="0"
                x2="50"
                y2="0"
                className={button1 ? classes.svg2 : classes.svg1}
              />
            </svg>
            PROJECTS
          </button>
          <br />
          <button
            onClick={() => {
              setButton1(false);
              setButton2(true);
              setButton3(false);
            }}
            className={button2 ? classes.buttonStyle2 : classes.buttonStyle1}
          >
            02
            <svg height="5" width="70">
              <line
                x1="10"
                y1="0"
                x2="50"
                y2="0"
                className={button2 ? classes.svg2 : classes.svg1}
              />
            </svg>
            INTERNSHIPS
          </button>
          <br />
          <button
            onClick={() => {
              setButton1(false);
              setButton2(false);
              setButton3(true);
            }}
            className={button3 ? classes.buttonStyle2 : classes.buttonStyle1}
          >
            03
            <svg height="5" width="70">
              <line
                x1="10"
                y1="0"
                x2="50"
                y2="0"
                className={button3 ? classes.svg2 : classes.svg1}
              />
            </svg>
            CONTACT ME
          </button>
        </p>
      </Grid>
      <Grid item lg={7} sm={12} md={7}>
        {button1 && <Projects />}
        {button2 && <Internships />}
        {button3 && <ContactMe />}
      </Grid>
    </Grid>
  );
}
