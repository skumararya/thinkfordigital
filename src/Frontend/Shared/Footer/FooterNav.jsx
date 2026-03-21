import React from "react";
import SocialLinks from "./SocialLinks.jsx";

const FooterNav = () => {
  return (
    <div className="FooterLinks">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <img src="images/cqw.png" alt="CQW" />
            <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer">
              <img src="images/xhtml.png" alt="Xhtml" />
            </a>
            <a href="https://jigsaw.w3.org/css-validator/" target="_blank" rel="noopener noreferrer">
              <img src="images/w3css.png" alt="W3C CSS" />
            </a>
          </div>

          <SocialLinks />

          <div className="col-auto">
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;