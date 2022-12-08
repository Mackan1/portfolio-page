import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
import Link from "next/link";

const ServerSideIsotope = dynamic(
  () => import("../src/components/ServerSideIsotope"),
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
                Server Side Tracking
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
                  <strong>Stape, GTM, Google Analytics, JavaScript</strong>
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
                As Adblockers and the IOS 14 update hurt e-commerce stores tracking, I learned to set up server-side tracking. The difference between client-side tracking and server-side tracking is that instead of directly sending the data from the client to the tracking website, you send it to a server where it gets collected and then sent to the tracking website. Not only does this help avoid adblockers, but it also has other benefits, such as improved page speed, data accuracy, and data security.
                </p>
                <p>Major learnings:</p>
                <ul>
                  <li>How client side tracking and server side tracking Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Gallery */}
      <section className="section section-inner">
        <div className="container">
          <ServerSideIsotope />
        </div>
      </section>
      {/* Navigation */}
      <section className="m-page-navigation">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="h-titles h-navs">
                <Link href="/ring-builder">
                  <a>
                    <span
                      className="nav-arrow"
                    >
                      Next Project
                    </span>
                    <span
                      className="h-title"
                    >
                      Online Ring Builder
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
