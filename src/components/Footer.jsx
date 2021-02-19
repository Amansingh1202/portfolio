import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  span: {
    color: "#e25555",
    fontSize: "30px",
  },
  div: {
    fontSize: "1.2em",
    fontWeight: 500,
    color: "lightgray",
    float: "right",
    margin: "0 15px 7px 0",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      Made with <span className={classes.span}>&hearts;</span> in React
    </div>
  );
}
