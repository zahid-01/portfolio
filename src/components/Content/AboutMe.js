// import Styles from "./AboutMe.module.css";
import Layout from "../../UI/Layout";

const AboutMe = () => {
  return (
    <Layout>
      <p>This is me</p>
      <p>
        In this article, we will know how to make a sticky element that will
        stick to the top of the screen. Here, we have used the div to stick to
        the top of the screen. We will understand its implementation by using
        the below 2 methods. Method 1: Using the sticky value of the position
        property The ‘sticky’ value of the position property sets an element to
        use a ‘relative’ position unless it crosses a specific portion of the
        page, after which the ‘fixed’ position is used. The vertical position of
        the element to be stuck can also be modified with the help of the ‘top’
        property. It can be given a value of ‘0px’ to make the element leave no
        space from the top of the viewport, or increased further to leave space
        from the top of the viewport. Example: This example illustrates the use
        of the position property to stick to the top of the element.
      </p>
    </Layout>
  );
};

export default AboutMe;
