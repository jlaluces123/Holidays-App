import React from 'react';

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
      <div calssName = "banner-wrapper"> {/* This has the background-image in css */}
        <h3 className = "banner-title">Time for the Holidays</h3>
        <div className = "banner-overlay"></div> {/* This will be the color overlay on top of the banner image */}
      </div>
    </div>
  );
}
 
export default Home;