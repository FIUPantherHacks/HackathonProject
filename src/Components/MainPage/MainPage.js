import React from 'react';
import './styles.css';
import Lottie from 'react-lottie';
import animationData from '../../lotties/Animation.json';
import virusAnimation from '../../lotties/VirusAnimation.json'
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
            <h4>Mrs. Rona</h4>
          </div>

          {/* <a href=""><img src="" wdith="100" alt="logo" /></a> */}
          <div>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Health</a></li>
              <li><a href="">Statistics</a></li>
              <li><a href="">Blog</a></li>
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
