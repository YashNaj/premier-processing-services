import React from "react";
import {
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import './cta.css';
const Cta = () => {
  return (
    <div className="pps__cta">
      <div className="pps__cta-container">
        <h1 className="pps__cta-title ">Contact Us Today!</h1>
        <div classname="pps__cta-component-container">
          <div className="pps__cta-component">
            
            <p>              <a href="http://"> support@premierprocessingservice.com</a>
            </p>
            <div className="pps__cta-icon cta-email">
            <FontAwesomeIcon icon={faEnvelope}/>
            </div>
          </div>
          <div className="pps__cta-component">
            <p>
              Call
              <a href="http://"> (800)317-5501</a>
            </p>
            <div className="pps__cta-icon">
            <FontAwesomeIcon icon={faPhone} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
