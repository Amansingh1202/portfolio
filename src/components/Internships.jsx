import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InternshipPart from "../components/InternshipPart";

const useStyles = makeStyles((theme) => ({
  part: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "100px",
    },
  },
}));

const internships = [
  {
    name: "Student Developer",
    time: "Jun 2020 - Aug 2020",
    location: "Navi Mumbai,Maharashtra,India",
    information: [
      "Working with 5 team members build an software to manage books and students information for department library.",
      "Created the database to store books and also store information of student who have issued books.",
      "Integrated an email service to send notifications to students and library manager.",
    ],
    technologies: "PHP, CSS, SQL, Javascript",
    link: "https://github.com/UKROCKZ/Library-Management",
    isLinked: true,
  },
  {
    name: "Front-end Developer",
    time: "Apr 2020 - May 2020",
    location: "Online",
    information: [
      "Worked on the front-end to revamp the design of the website",
      "Collaborated with 3 other members from different domains to customize the front-end as required",
    ],
    technologies: "CMS, HTML",
    isLinked: false,
  },
  {
    name: "Student Developer",
    time: "Dec 2019 - May 2020",
    location: "Navi Mumbai,Maharashtra,India",
    information: [
      "Created a result analysis software which would take students result and create comprehensive result.",
      "Built the database to hold the data of the students result.",
      "Created efficient queries to get desired information from database.",
    ],
    technologies: "PHP, CSS, SQL",
    link: "https://github.com/Amansingh1202/ResultAnalysis",
    isLinked: true,
  },
];

export default function PartProject() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item lg={6} sm={12} md={6}>
        <InternshipPart intern={internships[0]} />
        <InternshipPart intern={internships[1]} />
      </Grid>
      <Grid className={classes.part} item lg={6} sm={12} md={6}>
        <InternshipPart intern={internships[2]} />
      </Grid>
    </Grid>
  );
}
