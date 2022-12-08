import { Fragment, useEffect } from "react";
import {
  
  initCursor,
  stickyNav,
} from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import PreLoader from "./PreLoader";
const Layout = ({ children, extraWrapClass }) => {
  useEffect(() => {
    initCursor();
  
    window.addEventListener("scroll", stickyNav);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const srollAnimation = document.querySelectorAll(".scroll-animate");
      srollAnimation.forEach((element) => {

        element.classList.add("animate__active", "animate__animated");
      });
    }, 500);
  }, []);

  return (
    <Fragment>
      <div className="container-page ">

        <PreLoader />

        <Header />

        <div className={`wrapper ${extraWrapClass}`}>{children}</div>

        <Footer />
      </div>
      <div className="cursor"></div>
    </Fragment>
  );
};
export default Layout;
