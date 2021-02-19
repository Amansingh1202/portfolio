import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as LinkSvg } from "../assets/externalLink.svg";

const useStyles = makeStyles((theme) => ({
  outerDiv: {
    backgroundColor: "#252424",
    marginBottom: "15px",
    marginLeft: "15px",
    padding: "25px",
    "&:hover": {
      transform: "scale(1.05)",
      cursor: "pointer",
      padding: "30px",
    },
    "&:hover span": {
      color: "white",
    },
    "&:hover p": {
      color: "white",
    },
  },
  category: {
    textTransform: "uppercase",
    fontSize: "0.8em",
    letterSpacing: "2px",
    color: "rgba(255, 255, 255, 0.76)",
  },
  svg: {
    fill: "rgba(255, 255, 255, 0.459)",
    width: "20px",
    height: "20px",
    float: "right",
  },
  description: {
    fontWeight: 500,
    color: "rgba(255, 255, 255, 0.486)",
    [theme.breakpoints.up("sm")]: {
      margin: "20px 0 20px 0",
    },
  },
  information: {
    color: "rgba(255, 255, 255, 0.575)",
  },
  divColor: {
    color: "lightblue",
  },
}));

export default function InternshipPart({ intern }) {
  const classes = useStyles();
  function goToLink(url, isLinked) {
    if (isLinked) {
      window.open(url);
    }
  }
  return (
    <div
      onClick={() => goToLink(intern.link, intern.isLinked)}
      className={classes.outerDiv}
    >
      <span className={classes.category}>{intern.name}</span>
      {intern.isLinked && <LinkSvg className={classes.svg} />}
      <div className={classes.description}>
        {intern.time}
        <br />
        {intern.location}
        <br />
      </div>
      <p className={classes.information}>
        {intern.information.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </p>
      <div className={classes.divColor}>{intern.technologies}</div>
    </div>
  );
}
