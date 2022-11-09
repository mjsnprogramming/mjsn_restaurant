import { Link } from 'react-router-dom';
import '../../styles/headers/headerService.scss';

function HeaderService() {
    return (
        <div className = "HeaderService">
            <div id = "mjsnFoodHeader">
                <div id = "mjsnFood">
                    <span>MJSN</span>
                    <span>Food</span>
                </div>
                <div id = "headerLinks">
                <hr id = "hrService"></hr> 
            <ul>
                <li><Link to = "/" className = "links" id = "homeLink">Home</Link></li>
                <li><Link to = "/AboutUs" className = "links" id = "aboutLink">About Us</Link></li>
                <li><Link to = "/Service" className = "links" id = "serviceLinkService">Service</Link></li>
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
export default HeaderService;