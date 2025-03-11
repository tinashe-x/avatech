import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h3>Need help?</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3>Get in touch</h3>
                    <ul>
                        <li>Gauteng, South Africa</li>
                        <li><a href="mailto:avatechinfosystems@gmail.com">avatechinfosystems@gmail.com</a></li>
                        <li>(+27)-60-948-9794</li>
                    </ul>
                <div className="col-md-3">
                    <h3>Follow us</h3>
                    <ul className="social-icons">
                        <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faPinterest} /></a></li>
                    </ul>
                </div>
                </div>
                <div></div>
                <div className="col-md-3">
                    <h3>Subscribe to newsletter</h3>
                    <button className="btn btn-primary">✓ Subscribed</button>
                </div>
            </div>
        </div>
    </footer>
);
};

export default Footer;