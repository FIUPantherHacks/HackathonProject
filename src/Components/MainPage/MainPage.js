import React from 'react';
import './styles.css';
import Lottie from 'react-lottie';
import animationData from '../../lotties/Animation.json';
import virusAnimation from '../../lotties/VirusAnimation.json'
import {Link} from "react-router-dom";
function MainPage() {
  const logoOptions = {
    loop: true,
    autoplay: true,
    animationData: virusAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div>
      <section>
        <header>
          <div className="logo">
            <Lottie 
              options={logoOptions}
              height={50}
              width={50}
            />
            <h4>Ms. Rona</h4>
          </div>

          {/* <a href=""><img src="" wdith="100" alt="logo" /></a> */}
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/health">Health</Link></li>
              <li><Link to="/statistics">Statistics</Link></li>
              <li><Link to="">Blog</Link></li>
            </ul>
          </div>
        </header>
      </section>
      <section id="main">
      <div className="main-text">
        <span>COVID-19</span> <br></br> 
        some info here <br></br>
        lorem ipsum indeed <br></br>
      </div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
      </section>
    </div>
  );
}

export default MainPage;
