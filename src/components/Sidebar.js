import Styles from "./Sidebar.module.css";

const Sidebar = () => {
  const showContent = (e) => {
    console.log(e.target.dataset.id);
  };

  return (
    <div className={Styles.text}>
      <ul className={Styles.list}>
        <div data-id="me" onClick={showContent}>
          About Me
        </div>
        <div data-id="edu" onClick={showContent}>
          My Education
        </div>
        <div data-id="prj" onClick={showContent}>
          Projects
        </div>
        <div data-id="blg" onClick={showContent}>
          Blogs
        </div>
        <div data-id="cont" onClick={showContent}>
          Contact
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
