import AboutMe from "../Content/AboutMe";
import MyEducation from "../Content/MyEducation";
import Projects from "../Content/Projects";
import Contact from "../Content/Contact";

const MainContent = (props) => {
  switch (props.page) {
    case "me":
      return <AboutMe />;
    case "edu":
      return <MyEducation />;
    case "prj":
      return <Projects />;
    case "cont":
      return <Contact />;
    default:
      return <AboutMe />;
  }
};

export default MainContent;
