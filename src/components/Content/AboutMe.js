import Styles from "./AboutMe.module.css";
import Layout from "../../UI/Layout";

const AboutMe = () => {
  return (
    <Layout>
      <div className={Styles["about-me"]}>
        <div className={Styles.profile}>
          <img src="../../Assets/profile.jpg" alt="zahids profile" />
        </div>

        <div className={Styles.me}>
          <p>ZAHID HUSSAIN KHAN</p>
          <p>Srinagar, Jammu & Kashmir, India</p>
        </div>

        <div className={Styles.education}>
          <p>Computer Science Engineering</p>
          <p>Bachelors Degree</p>
        </div>

        <div className={Styles.frontend}>
          <p>Web Developer</p>
          <p>Backend and Frontend</p>
          <p>iOS and Android App Developer</p>
        </div>

        <div className={Styles.backend}>
          <p>Server Side Scripting</p>
          <p>Restfull API's</p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
