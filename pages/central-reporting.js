import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
import Link from "next/link";

const CentralReportingIsotope = dynamic(
  () => import("../src/components/CentralReportingIsotope"),
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
                Central Data Reporting
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
                  <strong>Jun 2022 - Present</strong>
                </div>
                <div className="details-label">
                  <span>Tech stack</span>
                  <strong>Fivetran, Airbyte, Google Data Studio, Google Bigquery</strong>
                </div>
                <div className="details-label">
                  <span>Categories</span>
                  <strong>
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
                This project started as an idea that I pitched to the management, who were keen on doing it. I gathered all of Blazar Capital's portfolio brands' data in one place with the help of ETL tools. I used Bigquery as the data warehouse. Moreover, in BigQuery I made SQL queries that I used for Blazar Capital's central reporting on the brands
                </p>
                <p>
                I was the only developer involved in this project.
                </p>
                <p>Major learnings:</p>
                <ul>
                  <li>SQL and BigQuery</li>
                  <li>ETL tools</li>
                  <li>How data is structured and how to pull the correct data from a relational database</li>
                  <li>The best way to grapically represent sales/advertising data and some important KPI's e-commerce stores use</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Gallery */}
      <section className="section section-inner">
        <div className="container">
          <CentralReportingIsotope />
        </div>
      </section>

      {/* Navigation */}
      <section className="m-page-navigation">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="h-titles h-navs">
                <Link href="/server-side">
                  <a>
                    <span
                      className="nav-arrow"
                    >
                      Next Project
                    </span>
                    <span
                      className="h-title"
                    >
                      Server Side Tracking
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
