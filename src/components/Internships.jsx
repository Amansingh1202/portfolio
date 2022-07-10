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
    name: "Web Application Developer - RidoBiko",
    time: "May 2021 - June 2021",
    location: "Online",
    information: [
      "Worked on the front-end to revamp the design of the website",
      "Collaborated with backend team to create a auctioning system",
    ],
    technologies: "HTML,CSS,Javascript",
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
  {
    name: "Network Consulting Engineer - Cisco",
    time: "Jan 2022 - June 2022",
    location: "Online",
    information: [
      "Worked in a team of two to create an automated queue manager to reduce 60% of queue managers daily work.",
    ],
    technologies: "Computer Networking,Python,Javascript",
    isLinked: false,
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
        <InternshipPart intern={internships[3]} />
      </Grid>
    </Grid>
  );
}
