import React from 'react';
import '../MainPage/styles.css';
import Lottie from 'react-lottie';
import virusAnimation from '../../lotties/VirusAnimation.json'
import {Link} from "react-router-dom";
function Header() {
    const logoOptions = {
        loop: true,
        autoplay: true,
        animationData: virusAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <section>
                <header>
                    <div className="logo">
                        <ul>
                            <li><a href="/"><h4><Lottie
                                options={logoOptions}
                                height={50}
                                width={50}
                                className="lottie-logo"
                            />
                                Ms. Rona</h4></a></li>
                        </ul>
                    </div>

                    {/* <a href=""><img src="" wdith="100" alt="logo" /></a> */}
                    <div className="navbar">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/health">Health</Link></li>
                            <li><Link to="/statistics">Statistics</Link></li>
                            <li><Link to="">Blog</Link></li>
                        </ul>
                    </div>
                </header>
            </section>
        </div>
    );
}

export default Header;
