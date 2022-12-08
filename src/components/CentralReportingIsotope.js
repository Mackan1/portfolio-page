import Isotope from "isotope-layout";
import { useEffect, useRef } from "react";
const  CentralReportingIsotope = () => {
  // Isotope
  const isotope = useRef();
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".m-gallery", {
        itemSelector: ".col-xs-12",
        layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".col-xs-12",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);

  return (
    <div className="row m-gallery py-4">
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="projects-item">
          <div
            className="image"
          >
            <div className="img">
              <img src="assets/images/datareporting1.png" alt="#1" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="projects-item">
          <div
            className="image"
          >
            <div className="img">
              <img src="assets/images/datareporting2.png" alt="#2" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="projects-item">
          <div
            className="image"
          >
            <div className="img">
              <img src="assets/images/datareporting3.png" alt="#3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CentralReportingIsotope;
