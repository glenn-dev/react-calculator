import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark pb-4 pt-4 fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 my-auto text-center">
            <img src={require('./../../../assets/img/logo-white.png')} className="img-fluid w-25" alt="glenn.js logo"/>
          </div>
          <div className="col-sm-6 text-center">
            <a href="https://github.com/glenn-dev" target="_blank">
              <i className="mx-3 fab fa-github-square text-white fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/glenn-marcano-b59b7414b/" target="_blank">
              <i className="mx-3 fab fa-linkedin text-white fa-2x"></i>
            </a>
            <a href="https://twitter.com/glennScript" target="_blank">
              <i className="mx-3 fab fa-twitter-square text-white fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;