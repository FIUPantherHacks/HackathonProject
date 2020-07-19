import React from 'react';
import './styles.css';
import Lottie from 'react-lottie';
import animationData from '../../lotties/Animation.json';
import Header from "../Header/Header";
function MainPage() {
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
        <Header/>

      <section id="main">
      <div className="main-text">
        <span>COVID-19</span> <br/>
        Information on Covid prevention <br/>
        As wells as information and statistics<br/>
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
