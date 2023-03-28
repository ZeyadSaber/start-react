import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';
import React from "react";
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <>
      <div className={styles.bg}>
        <div className="container">
        <div className="row p-5 text-center">
          <div className="col-4">
            <h2>LOCATION</h2>
            <p>2215 John Daniel Drive Clark, MO 65243</p>
          </div>
          <div className="col-4">
            <h2>AROUND THE WEB</h2>
            <div>
                <span><FontAwesomeIcon icon={faFacebook}/></span>
                <span><FontAwesomeIcon icon={faTwitter}/></span>
                <span><FontAwesomeIcon icon={faLinkedin}/></span>
                <span><FontAwesomeIcon icon={faDribbble}/></span>
            </div>
          </div>
          <div className="col-4">
            <h2>ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
          </div>
        </div>
        </div>
      </div>
      <div className="w-100 p-4 bg-dark text-white text-center">Copyright © Your Website 2021</div>
    </>
  );
};
