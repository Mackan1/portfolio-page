const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-left">
              {/* social */}
              <div
                className="social-links"
              >
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
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center">

            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
              <div
                className="copyright-text"
              >
                Developed by <strong>Markus Krag</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
