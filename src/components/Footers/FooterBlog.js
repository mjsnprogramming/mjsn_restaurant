import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faCircleChevronRight, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/Footer.scss';
import '../../styles/footers/footerBlog.scss';

function FooterBlog() {
    return (
        <div className = "FooterBlog">
            <div id = "info">
                <div id = "email">
                    <div id = "emailCircle">
                        <FontAwesomeIcon icon = {faEnvelope} id = "envelope"/>
                    </div>
                    <span>info@youremail.com</span>
                </div>
                <hr></hr>
                <div id = "mobile">
                    <div id = "mobileCircle">
                        <FontAwesomeIcon icon = {faPhone} id = "phone"/>
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
                and typersetting industry. Lorem Ipsum has been <br></br>the industry's standard dummy text ever since <br></br>
                the 1500s.</p>
                <div id = "socialMedia">
                    <FontAwesomeIcon icon = {faFacebookF} id = "facebook" className = "socialMedia"/>
                    <hr id = "firstSocialMediaHR" className = "socialMediaHR"></hr>
                    <FontAwesomeIcon icon = {faInstagram} id = "instagram" className = "socialMedia"/>
                    <hr id = "secondSocialMediaHR" className = "socialMediaHR"></hr>
                    <FontAwesomeIcon icon = {faTwitter} id = "twitter" className = "socialMedia"/>
                    <hr id = "thirdSocialMediaHR" className = "socialMediaHR"></hr>
                    <FontAwesomeIcon icon = {faYoutube} id = "youtube" className = "socialMedia"/>
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
            <div id = "newsletter">
                <span>NEWSLETTER</span>
                <p>Subscribe our newsletter to get our latest<br></br>
                update and news</p>
                <input type = "email" id = "newsletterInput" name = "newsletter" placeholder = "Your email address"></input>
                <button id = "newsletterSubmit">
                    <FontAwesomeIcon icon = {faCircleChevronRight} id = "submitIcon"/>
                </button>
            </div>
            <hr id = "bottomHR"></hr>
            <span id = "copyright">
            <FontAwesomeIcon icon = {faCopyright}/>
            Copyright 2022. MJSN Food. All Right Reserved.
            </span>
        </div>
        </div>
    )
}

export default FooterBlog;