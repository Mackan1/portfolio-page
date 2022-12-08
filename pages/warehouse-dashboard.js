import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
import Link from "next/link";

const  WarehouseDashboardIsotope = dynamic(
  () => import("../src/components/WarehouseDashboardIsotope"),
  {
    ssr: false,
  }
);

const Projectsingle = () => {
  return (
    <Layout extraWrapClass={"project-single"}>
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* titles */}
              <div className="h-titles">
                <h1
                  className="h-title"
                >
                 Warehouse Dashboard
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Details */}
      <section className="section section-inner details">
        <div className="container">
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              <div className="m-details">
                <div className="details-label">
                  <span>Date</span>
                  <strong>Feb 2022 - Mar 2022</strong>
                </div>
                <div className="details-label">
                  <span>Tech stack</span>
                  <strong>MongoDB, ReactJS, NodeJS, ExpressJS, Netlify, Docker, Google Cloud Run</strong>
                </div>
                <div className="details-label">
                  <span>Categories</span>
                  <strong>
                    Web Development <br />
                    Data
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Description */}
      <section className="section section-bg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div
                className="p-title"
              >
                About the project
              </div>
              <div
                className="text"
              >
                <p>
                I did this project for an internal overview of what warehouse the company's products were sent from. This project took about one and a half months to complete. I was the only developer involved in this project.
                </p>
                <p>
                This project was my first major react project. I learned a lot on the MERN stack, and I would say it is still my favourite stack to this date.
                </p>
                <p>Major learnings:</p>
                <ul>
                  <li>MERN stack </li>
                  <li>Using docker as a container and then hosting my server on google cloud run</li>
                  <li>NoSQL database</li>
                </ul>
                <a href="https://github.com/Mackan1/dashboard-server" className="text-decoration-underline">Checkout the dasboard server code here on Github</a>
                <br/>
            <a href="https://github.com/Mackan1/react-dashboard" className="text-decoration-underline">Checkout the dasboard frontend code here on Github</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Gallery */}
      <section className="section section-inner">
        <div className="container">
          <WarehouseDashboardIsotope />
        </div>
      </section>
      {/* Navigation */}
      <section className="m-page-navigation">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="h-titles h-navs">
                <Link href="/central-reporting">
                  <a>
                    <span
                      className="nav-arrow"
                    >
                      Next Project
                    </span>
                    <span
                      className="h-title"
                    >
                      Central Data Reporting
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Projectsingle;
