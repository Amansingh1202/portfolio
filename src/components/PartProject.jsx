import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as LinkSvg } from "../assets/externalLink.svg";

const useStyles = makeStyles((theme) => ({
  outerDiv: {
    backgroundColor: "#1a1919",
    marginBottom: "10px",
    padding: "25px",
    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
      padding: "30px",
    },
    "&:hover div": {
      color: "white",
    },
    "&:hover span": {
      color: "rgba(255, 255, 255, 0.877)",
    },
    "&:hover p": {
      color: "rgba(255, 255, 255, 0.685)",
    },
  },
  category: {
    textTransform: "uppercase",
    fontSize: "0.8em",
    letterSpacing: "2px",
    color: "rgba(255, 255, 255, 0.431)",
  },
  name: {
    fontSize: "1.6em",
    margin: "15px 0 5px 0",
    fontWeight: 700,
    color: "rgba(255, 255, 255, 0.726)",
    marginBottom: "-15px",
  },
  description: {
    fontWeight: 500,
    color: "rgba(255, 255, 255, 0.459)",
  },
  svg: {
    fill: "rgba(255, 255, 255, 0.459)",
    width: "20px",
    height: "20px",
    float: "right",
  },
}));

export default function PartProject({ obj }) {
  const classes = useStyles();
  function goToLink(url) {
    window.open(url);
  }

  return (
    <div onClick={() => goToLink(obj.link)} className={classes.outerDiv}>
      <span className={classes.category}>{obj.category}</span>
      <LinkSvg className={classes.svg} />
      <div className={classes.name}>{obj.name}</div>
      <p className={classes.description}>{obj.description}</p>
    </div>
  );
}
