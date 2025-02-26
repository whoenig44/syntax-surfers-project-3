
import React from "react";
import "./CSS/Footer.css";
import logo from '../assets/smanticsurferimage.jpg'

const Footer: React.FC = () => {

    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="column">
                        <h3>Contributors</h3>
                        <ul className= 'contributors'>
                            <li><a href="https://github.com/AmySuperCoder">Amy Griffith</a></li>
                            <li><a href="https://github.com/whoenig44">William Hoenig</a></li>
                            <li><a href="https://github.com/ShannonJTaylor">Shannon Taylor</a></li>
                        </ul>
                    
                    </div>
                    <div className="column logo-container">
                        <img className="logo" src={logo} alt="Semantic Surfer Logo" />
                    </div>
                    
                </div>
                <div className="copyright">
                    <p>&copy; {(new Date().getFullYear())} All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;