import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  a: {
    textDecoration: "none",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "60px",
    },
  },
  span: {
    position: "relative",
    top: "-5px",
    marginLeft: "7px",
  },
  div1: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
      marginBottom: "20px",
    },
  },
}));

export default function SocialLinks() {
  const classes1 = useStyles();
  return (
    <div className={classes1.div1}>
      <a
        rel="noreferrer"
        target="_blank"
        className={classes1.a}
        href="https://github.com/Amansingh1202"
      >
        <GitHubIcon />
        <span className={classes1.span}>Github</span>
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        className={classes1.a}
        href="https://www.linkedin.com/in/amankumar-singh-79ab531a6"
      >
        <LinkedInIcon />
        <span className={classes1.span}>LinkedIn</span>
      </a>
      <a className={classes1.a} href="mailto:aks001235@gmail.com">
        <MailIcon />
        <span className={classes1.span}>Mail</span>
      </a>
    </div>
  );
}
