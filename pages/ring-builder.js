import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
import Link from "next/link";

const RingBuilderIsotope = dynamic(
  () => import("../src/components/RingBuilderIsotope"),
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
                Online Ring Builder
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
                  <strong>Jan 2022 - Feb 2022</strong>
                </div>
                <div className="details-label">
                  <span>Tech stack</span>
                  <strong>Shopify Liquid, SASS, Javascript</strong>
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
                <p>
                This project was one of my first Shopify liquid projects. I got a request to build a ring builder for a jewellery store. First, a person should be able to choose a diamond in the ring builder. After that, a person should be able to select a band. Lastly, the ring builder should show the ring, size, and engraving options. Unfortunately, this project was never used for the jewellery store.
                </p>
                <p>
                I was the only developer involved in this project.
                </p>
                <p>Major learnings:</p>
                <ul>
                  <li>Shopify's Ajax Api</li>
                </ul>
                <a href="https://github.com/Mackan1/ring-builder" className="text-decoration-underline">Checkout the code on Github</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Gallery */}
      <section className="section section-inner">
        <div className="container">
          <RingBuilderIsotope />
        </div>
      </section>

      {/* Navigation */}
      <section className="m-page-navigation">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="h-titles h-navs">
                <Link href="/shopify-themes">
                  <a>
                    <span
                      className="nav-arrow"
                    >
                      Next Project
                    </span>
                    <span
                      className="h-title"
                    >
                      Shopify Themes
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
