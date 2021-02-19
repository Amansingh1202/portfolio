import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import { AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    backgroundColor: "ghostwhite",
    color: "white",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    marginLeft: "10vw",
    marginTop: "10vh",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 400,
      marginLeft: "40px",
      marginTop: "-5px",
    },
  },
  button: {
    color: "white",
    backgroundColor: "darkorchid",
    "&:hover": {
      backgroundColor: "darkblue",
    },
  },
  content: {
    marginLeft: "-50px",
    marginTop: "-50px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 400,
      marginLeft: "-40px",
      marginTop: "2px",
    },
  },
  info: {
    marginTop: "10px",
    maxWidth: 500,
    marginLeft: "10vw",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 400,
      marginLeft: "40px",
    },
  },
  err: {
    marginTop: "10px",
    maxWidth: 500,
    marginLeft: "10vw",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 400,
      marginLeft: "40px",
    },
  },
}));

export default function ContactMe() {
  const [submitted, setSubmitted] = useState(false);
  const [err, setErr] = useState(false);

  const removeMessage = () => {
    var obj = document.getElementById("info");
    if (obj) {
      obj.remove();
    }
  };

  const removeErr = () => {
    var obj = document.getElementById("err");
    if (obj) {
      obj.remove();
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("HEllo");
    let formData = new FormData();
    formData.append("name", document.getElementsByName("name"));
    formData.append("email", document.getElementsByName("email"));
    formData.append("message", document.getElementsByName("message"));
    document.getElementById("contact").reset();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch(() => {
        setErr(true);
      });
  };
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <form
            name="contact"
            id="contact"
            method="POST"
            data-netlify="true"
            className={classes.root}
          >
            <TextField
              name="name"
              id="standard-search"
              label="Name"
              type="search"
              required
            />
            <TextField
              name="email"
              id="standard-search"
              label="Email"
              type="email"
              required
            />
            <TextField
              name="message"
              id="outlined-textarea"
              label="Message"
              multiline
              variant="outlined"
              required
            />
          </form>
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            onClick={submitForm}
            className={classes.button}
            size="small"
          >
            Submit
          </Button>
        </CardActions>
        {submitted && (
          <div className={classes.message}>Thank you for contacting me!</div>
        )}
      </Card>
      <div id="messageInfo"></div>
      {submitted && (
        <div className={classes.info} id="info">
          <Alert
            onClose={() => {
              removeMessage();
            }}
          >
            Thank you for contacting me!
          </Alert>
        </div>
      )}
      {err && (
        <div className={classes.err} id="err">
          <Alert
            onClose={() => {
              removeErr();
            }}
            severity="error"
          >
            <AlertTitle>Error</AlertTitle>
            There was some<strong>error!</strong>
          </Alert>
        </div>
      )}
    </div>
  );
}
