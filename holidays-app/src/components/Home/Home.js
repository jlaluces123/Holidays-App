import React from 'react';
import "./Home.css";

/* Dependency-Related Imports */
import { Link } from "react-router-dom";

/* Component-Related Imports */
import FeatureBox from "../FeatureBox/FeatureBox.js";

const blockIcon = (
  <svg style = {{ height: 54, width: 54 }} viewBox="0 0 24 24">
    <path fill="#000000" d="M12,0A12,12 0 0,1 24,12A12,12 0 0,1 12,24A12,12 0 0,1 0,12A12,12 0 0,1 12,0M12,2A10,10 0 0,0 2,12C2,14.4 2.85,16.6 4.26,18.33L18.33,4.26C16.6,2.85 14.4,2 12,2M12,22A10,10 0 0,0 22,12C22,9.6 21.15,7.4 19.74,5.67L5.67,19.74C7.4,21.15 9.6,22 12,22Z" />
  </svg>
);

const accountIcon = (
  <svg style = {{ height: 54, width: 54 }} viewBox="0 0 24 24">
    <path fill="#000000" d="M20.5,14.5V16H19V14.5H20.5M18.5,9.5H17V9A3,3 0 0,1 20,6A3,3 0 0,1 23,9C23,9.97 22.5,10.88 21.71,11.41L21.41,11.6C20.84,12 20.5,12.61 20.5,13.3V13.5H19V13.3C19,12.11 19.6,11 20.59,10.35L20.88,10.16C21.27,9.9 21.5,9.47 21.5,9A1.5,1.5 0 0,0 20,7.5A1.5,1.5 0 0,0 18.5,9V9.5M9,13C11.67,13 17,14.34 17,17V20H1V17C1,14.34 6.33,13 9,13M9,4A4,4 0 0,1 13,8A4,4 0 0,1 9,12A4,4 0 0,1 5,8A4,4 0 0,1 9,4M9,14.9C6.03,14.9 2.9,16.36 2.9,17V18.1H15.1V17C15.1,16.36 11.97,14.9 9,14.9M9,5.9A2.1,2.1 0 0,0 6.9,8A2.1,2.1 0 0,0 9,10.1A2.1,2.1 0 0,0 11.1,8A2.1,2.1 0 0,0 9,5.9Z" />
  </svg>
);

const calendarIcon = (
  <svg style = {{ height: 54, width: 54 }} viewBox="0 0 24 24">
    <path fill="#000000" d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M19,8H5V19H9.5C9.81,19.75 10.26,20.42 10.81,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V13.03C20.5,12.22 19.8,11.54 19,11V8Z" />
  </svg>
);

/*
  Goals for this component:
    - Talk about the app and what it does
    - Get Started Button (No Login Required)
    - Show some example information via screenshots
    - Keep information simple and imformative
    - Testamonials
    - Add some jokes in there
    - Establish what the app is about
*/

const Home = () => {
  return (
    <div className = "home-component-wrapper">

      <section className = "banner-wrapper"> {/* This has the background-image in css */}

        <div className = "banner-text">
          <h1 className = "banner-title">Time for the Holidays</h1>
          <p className = "banner-description">
            Don't know all the public holidays and observed holidays? Say no more! With insert_name_here
            you can search over 200 different countries to find all the holidays possible!
          </p>     
          <Link to = "/calendar" className = "link-btn">Get Started</Link>
        </div>
        <div className = "banner-overlay"></div> {/* This will be the color overlay on top of the banner image */}        
      </section>

      <section className = "features-wrapper">
        <h3>Insert_Name_Here's Features</h3>

        <div className = "features-icon-wrapper">

          <div className = "feature-box">
            {blockIcon}
            <div className = "feature-body">
              <h3 className = "feature-title">Feature Title</h3>
              <p className = "feature-description">description description description description description description</p>
            </div>
          </div>

          <div className = "feature-box">
            {accountIcon}
            <div className = "feature-body">
              <h3 className = "feature-title">Feature Title</h3>
              <p className = "feature-description">description description description description description description</p>
            </div>
          </div>

          <div className = "feature-box">
            {calendarIcon}
            <div className = "feature-body">
              <h3 className = "feature-title">Feature Title</h3>
              <p className = "feature-description">description description description description description description</p>
            </div>
          </div>

        </div>
      </section>

      {/* <FeatureBox /> */}

    </div>
  );
}
 
export default Home;