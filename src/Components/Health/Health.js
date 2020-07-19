import React from 'react';
import Header from "../Header/Header";
import './styles.css';

export default function App() {
  
  return (
    <div>
    <Header/>
    <div className ="health">
        <section className="title">
            <span>How to Protect Yourself and Others</span>
        </section>
    <section>
            <h1> <img src="../imgs/washHands.png" width="50" alt="logo" />Wash Your Hands</h1>
        <ul>
            <li> <p className="dont">DON'T</p><img width="390" src="https://media.giphy.com/media/gjUgdsM72ZM1C8KzeT/giphy.gif"/></li>
            <li> <p className="do">DO</p><img src="https://media.giphy.com/media/tkBwALAud5Sfu/giphy.gif"/></li>
        </ul>
    </section>
    <section>
        <h1> <img src="../imgs/noTouching.png" width="50" alt="logo" />Avoid close contact</h1>
        <ul>
            <li> <p className="dont">DON'T</p><img width="390" src="https://media.giphy.com/media/36otikFtpDJq8/giphy.gif"/></li>
            <li> <p className="do">DO</p><img width="310" src="https://media.giphy.com/media/ln7pLAei70XANcY0f3/giphy.gif"/></li>
        </ul>
    </section>
    <section>
        <h1> <img src="../imgs/mask.png" width="50" alt="logo" />Cover coughs and sneezes</h1>
        <ul>
            <li> <p className="dont">DON'T</p><img src="https://media.giphy.com/media/Hkya3YFcXcmQ0/giphy.gif"/></li>
            <li> <p className="do">DO</p><img width="320" src="https://media.giphy.com/media/3ohs87Vwnip4EHaQuc/giphy.gif"/></li>
        </ul>
    </section>
    <section>
        <h1> <img src="../imgs/disinfect.png" width="50" alt="logo" />Clean and disinfect</h1>
        <ul>
            <li> <p className="dont">DON'T</p><img width="310" src="https://media.giphy.com/media/xT5LMNJvIyXUhG1LOM/giphy.gif"/></li>
            <li> <p className="do">DO</p><img src="https://media.giphy.com/media/9BuYR8p4HC4E0/giphy.gif"/></li>
        </ul>
    </section>
    <section>
        <h1> <img src="../imgs/days.png" width="50" alt="logo" />Monitor Your Health Daily</h1>
        <ul>
            <li> <p className="dont">DON'T</p><img width="350" src="https://media.giphy.com/media/26Ff1nitjsbu7KI1i/giphy.gif"/></li>
            <li> <p className="do">DO</p><img width="270" src="https://media.giphy.com/media/XepcmEMNavyHv1qe8u/giphy.gif"/></li>
        </ul>
    </section>
    </div>
    </div>
  );
}
