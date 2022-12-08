import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";

const ShopifyThemes = dynamic(
  () => import("../src/components/ShopifyThemesIsotope"),
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
                Shopify Themes
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
                  <strong>Apr 2022 - Present</strong>
                </div>
                <div className="details-label">
                  <span>Tech stack</span>
                  <strong>Shopify Liquid, SASS, JavaScript</strong>
                </div>
                <div className="details-label">
                  <span>Categories</span>
                  <strong>
                    Web Development
                    <br/>
                    Shopify
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
                <p>I have been a part of making a lot of Shopify Themes at Blazar Capital and one of them was Nordgreen. Nordgreen had its whole website redesigned in April 2022, and I have been an active part in making it happen. Together with two other developers, we have developed the webshop.</p>
                <p>My major learnings from this project: </p>
                <ul>
                    <li>How to live up to a client's expectations and requests</li>
                    <li>How to work with a team of developers and designers to effectively complete client requests</li>
                    <li>How to implement a 3D and AR model for a webshop</li>
                    <li>How to develop a functionable and good looking UI</li>
                </ul>
                <p className="text-decoration-underline">If you are intested to see some of the code from this project please contact me!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Gallery */}
      <section className="section section-inner">
        <div className="container">
          <ShopifyThemes />
        </div>
      </section>
    </Layout>
  );
};
export default Projectsingle;
