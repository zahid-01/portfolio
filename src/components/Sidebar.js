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
      <div className={`${Class.list} ${Class["fa-icon"]}`}>
        <div data-id="me" onClick={showContent}>
          <FontAwesomeIcon icon={faUserSecret} />
          About Me
        </div>
        <div data-id="edu" onClick={showContent}>
          <FontAwesomeIcon icon={faBrain} />
          My Education
        </div>
        <div data-id="prj" onClick={showContent}>
          <FontAwesomeIcon icon={faCodeBranch} />
          Projects
        </div>

        <div data-id="cont" onClick={showContent}>
          <FontAwesomeIcon icon={faCoffee} />
          Contact
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
