import PartProject from "../components/PartProject";

const styles = {
  p: {
    fontSize: "1.3em",
  },
};

const Certifications = [
  {
    name: "Programming with Google Go",
    description:
      "This specialization is intended for individuals who wish to improve their programming skills and harness the reliability and efficiency of Google's programming language - Golang",
    category: "Golang, Concurrency",
    link: "https://coursera.org/share/86254db08d2579a271ab29bd7b512717",
  },
  {
    name: "Mathematical Foundations for Cryptography",
    description:
      "An online non-credit course authorized by University of Colorado System and offered through Coursera",
    category: "Mathematics",
    link: "https://coursera.org/share/ac9a3a55a7f81df73704a1319113ce0a",
  },
  {
    name: "Network Security & Database Vulnerabilities",
    description:
      "An online non-credit course authorized by IBM and offered through Coursera",
    category: "Database, Networking",
    link: "https://coursera.org/share/d2f2ca6bd224485e3352755e9cf15345",
  },
  {
    name: "Javascript(Basic)",
    description: "Basic Javascript Knowledge test on Hackerrank",
    category: "Javascript",
    link: "https://www.hackerrank.com/certificates/6297a747773f",
  },
];

const Competitions = [
  {
    name: "Code Predators",
    description: "A three-track & three-level National Coding Competition",
    category: "Python",
    link: "https://pdfhost.io/v/bOHKRp1FB_author.pdf",
  },
  {
    name: "QUERY HUNTERS",
    description: "Competition based on Structured Query Language ",
    category: "SQL",
    link:
      "https://pdfhost.io/v/WNNg~zk2c_Query_Hunters2020AMANKUMAR_RAJESHKUMAR_SINGHpdf.pdf",
  },
];
export default function Others() {
  return (
    <div>
      <p style={styles.p}>Certifications:</p>
      <>
        {Certifications.map((object, i) => (
          <PartProject obj={object} key={i} />
        ))}
      </>
      <p style={styles.p}>Competitions:</p>
      <>
        {Competitions.map((object, i) => (
          <PartProject obj={object} key={i} />
        ))}
      </>
    </div>
  );
}
