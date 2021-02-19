import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  outerDiv: {
    backgroundColor: "#252424",
    marginBottom: "10px",
    padding: "30px",
    borderRadius: "2px",
    [theme.breakpoints.up("sm")]: {
      padding: "30px",
      width: "400px",
      marginTop: "20vh",
      marginLeft: "15vw",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
      marginLeft: "10px",
    },
  },
  label: {
    fontSize: "1.4em",
    color: "lightgray",
  },
  input: {
    color: "black",
    marginLeft: "10px",
    padding: "5px",
    fontSize: "0.8em",
    resize: "none",
    "&:focus": {
      backgroundColor: "lightblue",
      outline: "none",
      resize: "none",
      border: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "5px",
    },
  },
  button: {
    backgroundColor: "darkorchid",
    color: "white",
    border: "none",
    textTransform: "uppercase",
    borderRadius: "0.5px",
    "&:hover": {
      color: "lightgray",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "130px",
      marginTop: "10px",
      padding: "5px 10px",
      fontSize: "1.2em",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "80px",
      marginTop: "10px",
      padding: "5px 10px",
      fontSize: "1.1em",
    },
  },
  message: {
    color: "lightblue",

    [theme.breakpoints.up("sm")]: {
      fontSize: "1.2em",
      marginTop: "10px",
      marginLeft: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
      marginTop: "10px",
      marginLeft: "25px",
    },
  },
}));

export default function ContactMe() {
  const [submitted, setSubmitted] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", document.getElementById("name"));
    formData.append("email", document.getElementById("email"));
    formData.append("message", document.getElementById("message"));
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSubmitted(true, function () {
          setTimeout(setSubmitted(false), 8000);
        });
      })
      .catch(() => {
        setSubmitted(true, function () {
          setTimeout(setSubmitted(false), 8000);
        });
      });
  };
  const classes = useStyles();
  return (
    <div className={classes.outerDiv}>
      <form
        name="contact"
        method="POST"
        onSubmit={(e) => submitForm(e)}
        data-netlify="true"
      >
        <p>
          <label htmlFor="name" className={classes.label}>
            Name:
            <input
              className={classes.input}
              type="text"
              name="name"
              id="name"
              required
            />
          </label>
        </p>
        <p>
          <label htmlFor="email" className={classes.label}>
            Email:
            <input
              className={classes.input}
              type="email"
              name="email"
              id="email"
              required
            />
          </label>
        </p>
        <p>
          <label htmlFor="message" className={classes.label}>
            Message:
            <textarea
              className={classes.input}
              name="message"
              id="message"
              required
            />
          </label>
        </p>
        <input
          className={classes.button}
          type="submit"
          name="submit"
          value="submit"
        />
      </form>
      {submitted && (
        <div className={classes.message}>Thank you for contacting me!</div>
      )}
    </div>
  );
}
