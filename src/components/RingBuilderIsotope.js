import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
const  RingBuilderIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
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
              <img src="assets/images/ringbuilder1.png" alt="#1" />
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
              <img src="assets/images/ringbuilder2.png" alt="#2" />
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
              <img src="assets/images/ringbuilder3.png" alt="#3" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RingBuilderIsotope;
