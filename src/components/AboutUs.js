import HeaderAboutUs from './Headers/HeaderAboutUs.js';
import '../styles/AboutUs.scss';
import { faBowlFood, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import ceo from '../images/ceo.png';
import chef1 from '../images/chef1.png';
import chef2 from '../images/chef2.png';
import chef3 from '../images/chef3.png';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import FooterAboutUs from './Footers/FooterAboutUs.js';
function AboutUs() {
    return (
        <div className = "AboutUs">
            <HeaderAboutUs/> 
            <div id = "aboutUsHeaderImg">
                <span>About Us</span>
            </div>
            <div id = "ceoAndAdvantages">
            <div id = "ceo">
                <button>100%</button>
                <span>Best Services</span>
                <span>CEO, MJSN Food</span>
                <div id = "orangeBackground">
                    <img src = {ceo}/>
                </div>
            </div>
            
            <div id = "advantages">
                <div id = "cookingIcon">
                <FontAwesomeIcon icon= {faBowlFood} />
                </div>
                <div id = "deliciousFood" className = "advantages">Delicious Food</div>
                <div id = "area" className = "advantages">Area Best</div>
                <div id = "skilledChefs" className = "advantages">Skilled Chefs</div>
                <div id = "stars" className = "advantages">5 Star Review</div>
                </div>
                </div>
                <div id = "whyTheBest">
                    <div id = "aboutUsSpan">About Us</div>
                    <span id = "whyTheBestSpan">Why We Are The Best</span>
                    <p id = "whyTheBestParagraph">When an unknwon printer took a galley of type and scrambled it ot make
                    a type specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting.</p>
                    <div id = "healthyFood" className = "quickAndHealthy">
                        <div id = "healthyFoodIcon">
                            <FontAwesomeIcon icon = {faUtensils}/>
                        </div>
                        <span>Healthy Food</span>
                        <p>When an unknown printer took a gallery of type and<br></br>
                        scrambled it ot make a type specimen book.</p>    
                    </div>
                    <div id = "quickDelivery" className = "quickAndHealthy">
                        <div id = "quickDeliveryIcon">
                        <FontAwesomeIcon icon = {faPaperPlane} />
                        </div>
                            <span>Quick Delivery</span>
                            <p>When an unknown printer took a gallery of type and<br></br>
                            scrambled it ot make a type specimen book.</p>
                    </div>    
                </div> 
                <div id = "kitchenExpertsParagraph">
                    <span>Kitchen Experts</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typersetting<br></br>
                    industry. Lorem Ipsum has been the industry.</p>    
                </div>
                <div id = "kitchenExperts">
                    <div className = "kitchenExperts">
                        <img src  = {chef1}></img>
                        <span>Marry Anderson</span>
                        <span>Main Chef</span>
                        <div id = "socialMediaChefs">
                            <FontAwesomeIcon icon = {faFacebookF} className = "fb"/>
                            <hr></hr>
                            <FontAwesomeIcon icon = {faInstagram} className = "insta"/>
                            <hr></hr>
                            <FontAwesomeIcon icon = {faTwitter} className = "twitter"/>
                            <hr></hr>
                            <FontAwesomeIcon icon = {faYoutube} className = "yt"/>
                        </div>
                    </div>
                    <div className = "kitchenExperts">
                        <img src = {chef2}></img>
                        <span>Marry Anderson</span>
                        <span>Main Chef</span>
                        <div id = "socialMediaChefs">
                            <FontAwesomeIcon icon = {faFacebookF} className = "fb"/>
                            <hr></hr>
                            <FontAwesomeIcon icon = {faInstagram} className = "insta"/>
                            <hr></hr>
                            <FontAwesomeIcon icon = {faTwitter} className = "twitter"/>
                            <hr></hr>
                            <FontAwesomeIcon icon = {faYoutube} className = "yt"/>
                        </div>
                    </div> 
                    <div className = "kitchenExperts">
                        <img src = {chef3}></img>
                        <span>Marry Anderson</span>
                        <span>Main Chef</span>
                        <div id = "socialMediaChefs">
                            <FontAwesomeIcon icon = {faFacebookF} className = "fb"/>
                            <hr></hr>
                            <FontAwesomeIcon icon = {faInstagram} className = "insta"/>
                            <hr></hr>
                            <FontAwesomeIcon icon = {faTwitter} className = "twitter"/>
                            <hr></hr>
                            <FontAwesomeIcon icon = {faYoutube} className = "yt"/>
                        </div>
                    </div>     
                </div> 
                <FooterAboutUs/>
        </div>  
    )
}
export default AboutUs;