import React from 'react';
import "./Home.css";

/* Dependency-Related Imports */
import { Link } from "react-router-dom";

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

      <div className = "banner-wrapper"> {/* This has the background-image in css */}

        <div className = "banner-text">
          <h1 className = "banner-title">Time for the Holidays</h1>
          <p className = "banner-description">
            Don't know all the public holidays and observed holidays? Say no more! With insert_name_here
            you can search over 200 different countries to find all the holidays possible!
          </p>     
          <Link to = "/calendar" className = "link-btn">Get Started</Link>
        </div>
        
        <div className = "banner-overlay"></div> {/* This will be the color overlay on top of the banner image */}
      </div>

    </div>
  );
}
 
export default Home;