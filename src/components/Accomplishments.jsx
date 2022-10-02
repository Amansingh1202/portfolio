import PartProject from "./PartProject";

const styles = {
  p: {
    fontSize: "1.3em",
  },
  name: {
    fontSize: "1.6em",
    margin: "15px 0 5px 0",
    fontWeight: 700,
    color: "rgba(255, 255, 255, 0.726)",
    marginBottom: "-15px",
  },
};

const Certifications = [
  {
    name: "CCNA",
    description:
      "Implementing and Administering Cisco Solutions (CCNA) have demonstrated knowledge and skills related to network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability.",
    category: "Access Connectivity,Architectures and Services,Assurance and Automation,Core Routing,IP services,Programability,Security Fundamentals",
    link: "",
  },
  {
    name: "Cisco Certified DevNet Associate",
    description:
      "An online non-credit course authorized by University of Colorado System and offered through Coursera",
    category: "Application Deployment and Security,Automation,Cisco Platforms and Development,Cloud,DevOps,Network Fundamentals,Python Data Structures",
    link: "https://www.credly.com/badges/dc310aaa-3496-4551-bf48-6de285b9a112",
  },

  {
    name: "Front-End Web Development with React",
    description:
      "Through this course I explored Javascript based front-end application development, and in particular the React library. I also got an introduction to the use of Reactstrap for Bootstrap 4-based responsive UI design. I also learned Redux and use Fetch APIs for client-server communication",
    category: "React,Bootstrap,Redux",
    link: "https://coursera.org/share/cf90fdb55ff4e19abbd8488f4fdd8fa0",
  },
];

const Publications = [
  {
    name:"Analysis of hyperparameters in Sentiment Analysis of Movie Reviews using Bi-LSTM",
    category: "ITM Web of Conferences · May 5, 2022",
    description: "Movie reviews are an important factor in determining a film’s success because instead of depending solely on the number of views as a parameter for the success of the movie, movie reviews are used to acquire additional insights into the movie. Existing systems use LSTM for sentiment analysis but there is no study available how various hyperparameters affect the performance of the model. Bi-LSTM along with dropout layers provide good accuracy in sentiment analysis. The suggested method outperforms CNN and Natural Language Toolkit in terms of accuracy.The proposed model is tested using different hyper parameters including dropout rate,number of Bi-LSTM layers and Bi-LSTM nodes. 64 LSTM nodes, 2 Bi-directional Layers, and a 0.2 Dropout rate should be used for optimal accuracy. Effect of different text vectorization algorithms and activation functions was also studied. The combination of Tf-idf text vectorization and the ReLU activation function yields the best results.",
    link: "https://www.itm-conferences.org/articles/itmconf/abs/2022/04/itmconf_icacc2022_03012/itmconf_icacc2022_03012.html",
  }
]

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
      <p style={styles.p}>Publications:</p>
      <>
        {Publications.map((object, i) => (
          <PartProject obj={object} key={i} />
        ))}
      </>
    </div>
  );
}
