import { Link } from 'react-router-dom';
import '../../styles/headers/headerBlog.scss';

function HeaderBlog() {
    return (
        <div className = "HeaderBlog">
            <div id = "mjsnFoodHeader">

                <Link to = "/">
                    <div id = "mjsnFood">
                        <span>MJSN</span>
                        <span>Food</span>
                    </div>
                </Link>

                <div id = "headerLinks"> 
                    <hr id = "hrBlog"></hr>
                        <ul>
                            <li><Link to = "/" className = "links" id = "homeLink">Home</Link></li>
                            <li><Link to = "/AboutUs" className = "links" id = "aboutLink">About Us</Link></li>
                            <li><Link to = "/Menu" className = "links" id = "menuLink">Menu</Link></li>
                            <li><Link to = "/Blog" className = "links" id = "blogLinkBlog">Blog</Link></li>
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
export default HeaderBlog;