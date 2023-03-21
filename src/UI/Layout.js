import Styles from "./Layout.module.css";

const Layout = (props) => {
  return <div className={Styles["main-section"]}>{props.children}</div>;
};

export default Layout;
