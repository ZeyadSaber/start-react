import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="container py-5">
        <div className={`${styles.sectiontitle} text-center`}>
          <h1>contact</h1>
          <div className="w-100 my-4">
            <div className={styles.line}></div>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <div className={styles.line}></div>
          </div>
        </div>
        <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <input class="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name."/>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <input class="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address."/>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <input class="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number."/>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <textarea class="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message." aria-invalid="false"></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div id="success"></div>
                            <div class="form-group"><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                        </form>
                    </div>
                </div>
      </div>
    </section>
  );
};
