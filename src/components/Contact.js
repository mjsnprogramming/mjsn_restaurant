import HeaderContact from './Headers/HeaderContact.js';
import FooterContact from './Footers/FooterContact.js';
import '../styles/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div className = "Contact">
            <HeaderContact/>    
            <div id = "contactHeaderImg">
                <span>Contact Us</span>
            </div>
            <div id = "letsTalk">
                <span>Let's Talk</span>
                <p>When an unknown printer took a galley of type and scrambled it took make
                a type specimen book.</p>
                <label for = "name">
                    Your Name
                    <input type = "text" id = "name" name = "name" className = "nameAndEmail" placeholder = "E.g Michal Majewski"></input>
                </label>

                <label for = "email">
                    Your Email
                    <input type = "email" id = "email" name = "email" className = "nameAndEmail" placeholder = "E.g michal.majewski.lublin@gmail.com"></input>
                </label>

                <label for = "message">
                    Your Message
                    <input type = "textarea" id = "message" name = "message" placeholder = "Write Here...."></input>
                </label>
                <button id = "contactSubmit">Submit</button>
            </div>
            <div id = "location">
                <div id = "getLocation">
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4869.020903170155!2d16.862736560598307!3d52.397424374014264!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1668423520104!5m2!1spl!2spl"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title = "poznan"></iframe>
                </div>
                <div id = "contactAddress" className = "contactDetails">
                    <div id = "locationIcon" className = "locationCircles">
                        <FontAwesomeIcon icon = {faLocationDot}/>
                    </div>
                    <span>Bułgarska 17, 60-320, Poznań</span>
                </div>
                <div id = "contactPhone" className = "contactDetails">
                    <div id = "phoneIcon" className = "locationCircles">
                        <FontAwesomeIcon icon = {faPhone}/>
                    </div>
                    <span>+8801817672626</span>
                </div>
                <div id = "contactEmail" className = "contactDetails">
                    <div id = "emailIcon" className = "locationCircles">
                        <FontAwesomeIcon icon = {faEnvelope}/>
                    </div>
                    <span>michal.majewski.lublin@gmail.com</span>
                </div>
            </div>
            <FooterContact/>
        </div>
    )
}

export default Contact;