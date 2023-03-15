import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faCodeBranch,
  faCoffee,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import Class from "./Sidebar.module.css";

const Sidebar = (props) => {
  const showContent = (e) => {
    props.setPage(e.target.dataset.id);
  };

  return (
    <div className={Class.text}>
      <div className={Class.list}>
        <div data-id="me" onClick={showContent}>
          <FontAwesomeIcon className={Class["fa-icon"]} icon={faUserSecret} />
          About Me
        </div>
        <div data-id="edu" onClick={showContent}>
          <FontAwesomeIcon className={Class["fa-icon"]} icon={faBrain} />
          My Education
        </div>
        <div data-id="prj" onClick={showContent}>
          <FontAwesomeIcon className={Class["fa-icon"]} icon={faCodeBranch} />
          Projects
        </div>

        <div data-id="cont" onClick={showContent}>
          <FontAwesomeIcon className={Class["fa-icon"]} icon={faCoffee} />
          Contact
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
