import { Link } from 'react-router-dom';
import '../../styles/headers/headerMain.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


function HeaderMain() {
    return (
        <div className = "HeaderMain">
            <div id = "mjsnFoodHeader">
                <div id = "mjsnFood">
                    <span>MJSN</span>
                    <span>Food</span>
                </div>
                <div id = "headerLinks"> 
                <hr id = "hrMain"></hr>
            <ul>
                <li><Link to = "/" className = "links" id = "homeLinkHome">Home</Link></li>
                <li><Link to = "/AboutUs" className = "links" id = "aboutLink">About Us</Link></li>
                <li><Link to = "/Menu" className = "links" id = "menuLink">Menu</Link></li>
                <li><Link to = "/Blog" className = "links" id = "blogLink">Blog</Link></li>
                <li><Link to = "/Contact" className = "links" id = "contactLink">Contact Us</Link></li>
            </ul>
            </div>
            <div id = "nav" onClick = {navFunction}>
                <div className = "navLinks" id = "navLink1"></div>
                <div className = "navLinks" id = "navLink2"></div>
                <div className = "navLinks" id = "navLink3"></div>
            </div>
            <div id = "navDropped" onClick = {navDroppedFunction}>
                <div className = "navLinks" id = "navLink4"></div>
                <div className = "navLinks" id = "navLink5"></div>
                <div className = "navLinks" id = "navLink6"></div>
            </div>
            <div id = "navDrop">
            <div id = "mjsnFoodDropped">
                    <span>MJSN</span>
                    <span>Food</span>
                </div>
            
                <div id = "headerLinksDropped"> 
                <hr id = "hrMainDropped"></hr>
            <ul>
                <li><Link to = "/" className = "links" id = "homeLinkHome">Home</Link></li>
                <li><Link to = "/AboutUs" className = "links" id = "aboutLink">About Us</Link></li>
                <li><Link to = "/Menu" className = "links" id = "menuLink">Menu</Link></li>
                <li><Link to = "/Blog" className = "links" id = "blogLink">Blog</Link></li>
                <li><Link to = "/Contact" className = "links" id = "contactLink">Contact Us</Link></li>
            </ul>
            </div>
            <div id = "socialMedia">
                    <FontAwesomeIcon icon = {faFacebookF} id = "facebook" className = "socialMedia"/>
                    <hr id = "firstSocialMediaHR" className = "socialMediaHR"></hr>
                    <FontAwesomeIcon icon = {faInstagram} id = "instagram" className = "socialMedia"/>
                    <hr id = "secondSocialMediaHR" className = "socialMediaHR"></hr>
                    <FontAwesomeIcon icon = {faTwitter} id = "twitter" className = "socialMedia"/>
                    <hr id = "thirdSocialMediaHR" className = "socialMediaHR"></hr>
                    <FontAwesomeIcon icon = {faYoutube} id = "youtube" className = "socialMedia"/>
            </div>

            </div>
            </div>
        </div>
    )
}
const nav = document.querySelector("#nav");
const navDrop = document.querySelector("#navDrop");
const navDropped = document.querySelector("#navDropped");

const navFunction = () => {
    if (navDrop.style.display === 'none' ) {
        nav.style.display = 'none';
        navDrop.style.display = 'block';
        navDropped.style.display = 'block';
    }
}
const navDroppedFunction = () => {
    if (navDrop.style.display === 'block') {
        nav.style.display = 'block';
        navDrop.style.display = 'none';
        navDropped.style.display = 'none';
    }
}
window.onload = () => {
    navFunction();
    navDroppedFunction();
}


export default HeaderMain;
