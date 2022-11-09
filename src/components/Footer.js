import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
    return (
        <div className = "Footer">
            <div id = "info">
                <div id = "email">
                    <div id = "emailCircle">
                        <FontAwesomeIcon icon = {faEnvelope}/>
                    </div>
                    <span>info@youremail.com</span>
                </div>
                <hr></hr>
                <div id = "mobile">
                    <div id = "mobileCircle">
                        <FontAwesomeIcon icon = {faPhone}/>
                    </div>
                    <span>+880 321 655 9985</span>
                </div>
            </div>
            <div id = "footerMainSection">
                <div id = "mjsnFood">
                    <span>MJSN</span>
                    <span>Food</span>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing<br></br>
                and typersetting industry. Lorem Ipsum has been the industry's standard dummy text ever since <br></br>
                the 1500s.</p>
                <div id = "socialMedia">
                    <FontAwesomeIcon icon = {faFacebook}/>
                    <hr></hr>
                    <FontAwesomeIcon icon = {faInstagram}/>
                    <hr></hr>
                    <FontAwesomeIcon icon = {faTwitter}/>
                    <hr></hr>
                    <FontAwesomeIcon icon = {faYoutube}/>
            </div>
            <div id = "quickLink">
                <span>QUICK LINK</span>
                <ul>
                    <li><Link to = "/AboutUs" className = "footerLinks">About Us</Link></li>
                    <li><Link to = "/Menu" className = "footerLinks">Menu</Link></li>
                    <li><Link to = "/Blog" className = "footerLinks">Blog</Link></li>
                    <li><Link to = "/Contact" className = "footerLinks">Contact Us</Link></li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Footer;