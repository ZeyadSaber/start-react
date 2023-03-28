import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from './about.module.css';

export const About = () => {
  return (
    <>
      <section id="about" className={styles.about}>
        <div className="container py-5">
        <div className='text-center'>
          <h1>ABOUT</h1>
          <div className='w-100 my-4'>
            <div className={styles.line}></div>
            <FontAwesomeIcon icon={['fas', 'star']}/>
          <div className={styles.line}></div>
          </div>
        </div>
          <div className="row mx-3 gx-5">
            <div className="col-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-6">
              <p>
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
