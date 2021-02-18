import PartProject from "../components/PartProject";

const ProjectList = [
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
