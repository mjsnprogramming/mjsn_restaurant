import { Link } from 'react-router-dom';
import '../../styles/headers/headerAboutUs.scss';

function HeaderAboutUs() {
    return (
        <div className = "HeaderAboutUs">
            <div id = "mjsnFoodHeader">
                <div id = "mjsnFood">
                    <span>MJSN</span>
                    <span>Food</span>
                </div>
                <div id = "headerLinks"> 
                <hr id = "hrAbout"></hr>
            <ul>
                <li><Link to = "/" className = "links" id = "homeLink">Home</Link></li>
                <li><Link to = "/AboutUs" className = "links" id = "aboutLinkAboutUs">About Us</Link></li>
                <li><Link to = "/Service" className = "links" id = "serviceLink">Service</Link></li>
                <li><Link to = "/Products" className = "links" id = "productsLink">Products</Link></li>
                <li><Link to = "/Contact" className = "links" id = "contactLink">Contact Us</Link></li>
            </ul>
            </div>
            <div id = "nav">
                <div className = "navLinks" id = "navLink1"></div>
                <div className = "navLinks" id = "navLink2"></div>
                <div className = "navLinks" id = "navLink3"></div>
            </div>
            <div id = "navDrop">
                
            </div>
            </div>
        </div>
    )
}
export default HeaderAboutUs;