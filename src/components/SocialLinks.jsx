import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

export default function SocialLinks() {
  var style = {
    a: {
      textDecoration: "none",
      color: "white",
      marginLeft: "60px",
    },
    span: {
      position: "relative",
      top: "-5px",
      marginLeft: "7px",
    },
  };
  return (
    <>
      <a
        rel="noreferrer"
        target="_blank"
        style={style.a}
        href="https://github.com/Amansingh1202"
      >
        <GitHubIcon />
        <span style={style.span}>Github</span>
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        style={style.a}
        href="https://www.linkedin.com/in/amankumar-singh-79ab531a6"
      >
        <LinkedInIcon />
        <span style={style.span}>LinkedIn</span>
      </a>
      <a style={style.a} href="mailto:aks001235@gmail.com">
        <MailIcon />
        <span style={style.span}>Mail</span>
      </a>
    </>
  );
}
