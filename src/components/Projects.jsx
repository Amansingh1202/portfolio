import PartProject from "../components/PartProject";

const ProjectList = [
  {
    name: "Spam_Message_Detection",
    description:
      "This application detects whether the message entered by the user is spam or not using Naive Bayes Algorithm",
    category: "Flask , Sklearn",
    link: "https://github.com/Amansingh1202/Spam_Message_Detection",
  },
  {
    name: "Food-app",
    description: "A food application built using Nuxt.js",
    category: "Vue , Javascript",
    link: "https://github.com/Amansingh1202/food-app",
  },
  {
    name: "BookRating",
    description: "A book rating system made using Flask and PostgreSQL ",
    category: "Python",
    link: "https://github.com/Amansingh1202/BookRating",
  },
  {
    name: "Notemaking-App",
    description: "A Note Making app made using Next.js",
    category: "React , Typescript",
    link: "https://github.com/Amansingh1202/notemaking-app",
  },
  {
    name: "Marinelife-Information-App",
    description:
      "An application that provides information about marine animals",
    category: "Vue , Javascript , Golang",
    link: "https://github.com/Amansingh1202/marinelife-information-app",
  },
  {
    name: "Calender-events",
    description:
      "This app is used to schedule events in the calender.The events are stored in the local storage of the browser.",
    category: "Reactjs , Material UI",
    link: "https://github.com/Amansingh1202/calender-events",
  },
];

export default function Projects() {
  return (
    <>
      {ProjectList.map((object, i) => (
        <PartProject obj={object} key={i} />
      ))}
    </>
  );
}
