import React from "react";
import logo from "../../assets/images/text249.png";
import "./footer.css";
const Footer = () => {
  return (
    <div className="pps__footer" id= 'moreinfo'>
      <div className="pps__footer-container">
        <div className="footer-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="links-container">
          <div className="footer-links">
            <div className="footer-links-container">
              <a
                href="mailto: Support@premierprocessingservice.com<"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support
                <br />
                @premierprocessingservice.com
              </a>
            </div>
            <div className="divider"></div>
            <div className="footer-links-container">
              <a
                href="tel:5558920234"
                onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
              >
                (800)317-5501
              </a>
            </div>
            <div className="divider"></div>
            <a
              target="_blank"
              href="https://www.google.com/maps/dir/33.835514,-117.583275/Palo+Verde+professional+building,+4959+Palo+Verde+St,+Montclair,+CA+91763/@33.961322,-117.736469,12z/data=!3m1!4b1!4m17!1m7!3m6!1s0x80c33187362f6857:0x93ce7fb7046d728b!2sPalo+Verde+professional+building,+4959+Palo+Verde+St,+Montclair,+CA+91763!3b1!8m2!3d34.0809153!4d-117.6967865!4m8!1m1!4e1!1m5!1m1!1s0x80c33187362f6857:0x93ce7fb7046d728b!2m2!1d-117.6967865!2d34.0809153"
              rel="noopener noreferrer"
            >
              <div className="footer-links-container">
                <p>
                  4959 Palo Verdea St,
                  <br />
                  Montclair,CA,91763
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
