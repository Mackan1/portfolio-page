import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const ProjectIsotop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".projects-items", {
        itemSelector: ".projects-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".projects-col",
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
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="projects-box">
        <div
          className="filter-links"
        >
          <a
            className={`c-pointer ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".projects-col"
          >
            All
          </a>
          <a
            className={`c-pointer ${activeBtn("sorting-data")}`}
            onClick={handleFilterKeyChange("sorting-data")}
            data-href=".sorting-data"
          >
            Data
          </a>
          <a
            className={`c-pointer ${activeBtn("sorting-web-development")}`}
            onClick={handleFilterKeyChange("sorting-web-development")}
            data-href=".sorting-web-development"
          >
            Web Development
          </a>
          <a
            className={`c-pointer ${activeBtn("sorting-shopify")}`}
            onClick={handleFilterKeyChange("sorting-shopify")}
            data-href=".sorting-shopify"
          >
            Shopify
          </a>
        </div>
        <div className="projects-items projects-list-items row">
          <div className="projects-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-data sorting-web-development">
            <div className="projects-item">
              <Link href="/warehouse-dashboard">
                <a>
                  <span
                    className="image"
                  >
                    <span className="img">
                      <img src="assets/images/shipping1.png" alt="Warehouse dashboard" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name"
                    >
                      Warehouse dashboard
                    </span>
                    <span
                      className="category"
                    >
                      Data
                      <br />
                      Web Development
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="projects-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-data">
            <div className="projects-item">
              <Link href="/central-reporting">
                <a>
                  <span
                    className="image"
                  >
                    <span className="img">
                      <img src="assets/images/datareporting3.png" alt="Gooir" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name"
                    >
                      Central Data Reporting
                    </span>
                    <span
                      className="category"
                    >
                      Data
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="projects-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-data">
            <div className="projects-item">
              <Link href="/server-side">
                <a>
                  <span
                    className="image"
                  >
                    <span className="img">
                      <img src="assets/images/ss1.png" alt="Explore" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name"
                    >
                      Server Side Tracking
                    </span>
                    <span
                      className="category"
                    >
                      Data
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="projects-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-shopify sorting-web-development">
            <div className="projects-item">
              <Link href="/ring-builder">
                <a>
                  <span
                    className="image"
                  >
                    <span className="img">
                      <img src="assets/images/ringbuilder1.png" alt="Mozar" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name"
                    >
                      Online Ring Builder
                    </span>
                    <span
                      className="category"
                    >
                      Web Development
                      <br />
                      Shopify
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="projects-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-shopify sorting-web-development">
            <div className="projects-item">
              <Link href="/shopify-themes">
                <a>
                  <span
                    className="image"
                  >
                    <span className="img">
                      <img src="assets/images/nordgreen2.png" alt="Stay Fit" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="name"
                    >
                      Shopify Themes
                    </span>
                    <span
                      className="category"
                    >
                      Web Development
                      <br />
                      Shopify
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </Fragment>
  );
};
export default ProjectIsotop;
