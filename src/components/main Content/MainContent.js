import AboutMe from "../Content/AboutMe";
import MyEducation from "../Content/MyEducation";
import Projects from "../Content/Projects";
import Contact from "../Content/Contact";

const MainContent = (props) => {
  switch (props.data) {
    case "AboutMe":
      return <AboutMe />;
    case "MyEducation":
      return <MyEducation />;
    case "Projects":
      return <Projects />;
    case "Contact":
      return <Contact />;
    default:
      return <AboutMe />;
  }
};

export default MainContent;
