import dynamic from "next/dynamic";
import ContactForm from "../src/components/ContactForm";
import Layout from "../src/layout/Layout";

const ProjectIsotop = dynamic(() => import("../src/components/ProjectIsotop"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <section className="section section-started">
        <div className="container">
          <div className="hero-started">
            <div
              className="slide"
            >
              <img src="assets/images/profile.png" alt="" />
              
            </div>
            <div className="content">
              <div className="titles">
                <div
                  className="subtitle"
                >
                  Full Stack Developer
                </div>
                <h2
                  className="title"
                >
                  Markus Krag
                </h2>
              </div>
              <div
                className="description"
              >
                <p>
                  I am Full Stack Developer based in Copenhagen, Denmark.
                </p>
                <div className="social-links">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/markus-krag/">
                  <i aria-hidden="true" className="fab fa-linkedin" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/Mackan1">
                  <i aria-hidden="true" className="fab fa-github" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/markus.krag/">
                  <i aria-hidden="true" className="fab fa-facebook" />
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg"
        id="about-section"
      >
        <div className="container">

          <div className="m-titles">
            <h2
              className="m-title"
            >
              About Me
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">

              <div className="numbers-items">
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-flag"></i>
                  </div>
                  <div className="num">Nationality</div>
                  <div className="title">
                    Swedish and Danish
                  </div>
                </div>
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-map" />
                  </div>
                  <div className="num">Residence</div>
                  <div className="title">
                    Copenhagen, Denmark
                  </div>
                </div>

              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line d-flex flex-column justify-content-center">

              <div className="profile-box">
                <div
                  className="text"
                >
                  <p>
                    My name is Markus Krag. I am half swedish and danish and i currently live in Copenhagen, Denmark.
                  </p>
                  <p>
                    I have experience with both frontend- and backend- development. I also have sales experience from my prior positions. 
                    I speak Danish, English and Swedish fluently, and i am conversational proficient in German.
                     My hobbies are golfing, skiing, football and running.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section"
        id="resume-section"
      >
        <div className="container">

          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Resume
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
            
              <div className="cv-left">
                <div className="cv-items">
                  <div
                    className="p-title"
                  >
                    EDUCATION
                  </div>
                  <div
                    className="cv-item"
                  >
                    <div className="date">2022</div>
                    <div className="name">BSc in International Business</div>
                    <div className="subname">Copenhagen Business School</div>
                    <div className="text">
                      <p>
                      International Business at CBS has the highest GPA entry-level (11.5 / 12) requirement in regard to all Danish business-related undergraduate programs
                      </p>
                    </div>
                  </div>
                  <div
                    className="cv-item"
                  >
                    <div className="date">2019 - 2022</div>
                    <div className="name">High School Degree</div>
                    <div className="subname">Niels Brock</div>
                    <div className="text">
                      <p>
                      Finished with a grade of 11.7 out of 12 on the danish grading scale. Extra curricular activities: Founded and coached the school football team. A part of the tutor team. As a tutor, I helped new students settle into the school.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cv-items">
                  <div
                    className="p-title"
                  >
                    SKILLS
                  </div>
                  <div
                    className="cv-item"
                  >
                    <div className="name">Tech skills</div>
                    <div className="text">
                      <p>
                      HTML, Google Cloud Platform, REST APIs, JSON, ETL Tools, CSS, JavaScript, Shopify Liquid, Node.js, MongoDB, React.js, SQL, Python, Git
                      </p>
                    </div>
                  </div>
                  <div
                    className="cv-item"
                  >
                    <div className="name">Languages</div>
                    <div className="text">
                      <p>
                      Fluent in Danish, Swedish and English; Conversational Proficiency in German
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cv-right">
                <div className="cv-items">
                  <div
                    className="p-title"
                  >
                    EXPERIENCE
                  </div>
                 
                  <div
                    className="cv-item"
                  >
                    <div className="date">Aug 2022 - Present</div>
                    <div className="name">Mercive</div>
                    <div className="subname">Full Stack Developer</div>
                    <div className="text">
                      <p>
                      Full stack developer for Mercive
                      </p>
                    </div>
                  </div>
                  <div
                    className="cv-item"
                  >
                    <div className="date">Jan 2022 - Present</div>
                    <div className="name">Blazar Capital</div>
                    <div className="subname">Full Stack Developer</div>
                    <div className="text">
                      <p>
                      Developer for the portfolio brands of Blazar Capital
                      My tasks consisted of a wide range of projects. The projects varied from frontend to backend.
                      </p>
                    </div>
                  </div>
                  <div
                    className="cv-item"
                  >
                    <div className="date">Aug 2021 - Dec 2021</div>
                    <div className="name">Vaekst ApS</div>
                    <div className="subname">Business Development Consultant</div>
                    <div className="text">
                      <p>
                      I helped Vaekst’s clients with prospecting, lead generation and lead management
                      </p>
                    </div>
                  </div>
                  <div
                    className="cv-item"
                  >
                    <div className="date">May 2019 - June 2021</div>
                    <div className="name">Aldi Denmark</div>
                    <div className="subname">Sales Assistant and promoted to 1. Assistant</div>
                    <div className="text">
                      <p>
                      My primary tasks were making sure products were in store/place, helping customers, closing the store, and giving employees tasks
                      </p>
                    </div>
                  </div>
                </div>       
              </div>
              <div className="clear" />
             
              <a
                target="_blank"
                rel="noreferrer"
                href="assets/MarkusKrag_Resume.docx" download 
                className="btn"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg"
        id="projects-section"
      >
        <div className="container">
         
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Projects
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
             
              <div
                className="text"
              >
                <p>
                  A Collection of some projects I have done.
                  Take a look!
                </p>
              </div>
            </div>
          </div>
         
          <ProjectIsotop />
        </div>
      </section>


    


      
      <ContactForm />
    </Layout>
  );
};
export default Index;
