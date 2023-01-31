import { Link } from 'react-router-dom';
import '../../styles/headers/headerAboutUs.scss';


function HeaderAboutUs() {

    return (
        <div className = "HeaderAboutUs">
            <div id = "mjsnFoodHeader">

                <Link to = '/'>
                    <div id = "mjsnFood">
                        <span>MJSN</span>
                        <span>Food</span>
                    </div>
                </Link>

                <div id = "headerLinks"> 
                    <hr id = "hrAbout"></hr>
                        <ul>
                            <li><Link to = "/" className = "links" id = "homeLink">Home</Link></li>
                            <li><Link to = "/AboutUs" className = "links" id = "aboutLinkAboutUs">About Us</Link></li>
                            <li><Link to = "/Menu" className = "links" id = "menuLink">Menu</Link></li>
                            <li><Link to = "/Blog" className = "links" id = "blogLink">Blog</Link></li>
                            <li><Link to = "/Contact" className = "links" id = "contactLink">Contact Us</Link></li>
                        </ul>
                </div>

                <div id = "nav">
                    <div className = "navLinks" id = "navLink1"></div>
                    <div className = "navLinks" id = "navLink2"></div>
                    <div className = "navLinks" id = "navLink3"></div>
                </div>

                <div id = "navDrop">
                    <ul>
                        <li><Link to = "/">Home</Link></li>
                        <li><Link to = "/AboutUs">About Us</Link></li>
                        <li><Link to = "/Menu">Menu</Link></li>
                        <li><Link to = "/Blog">Blog</Link></li>
                        <li><Link to = "/Contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
/*const nav = document.querySelector('#nav');
    const navDrop = document.querySelector('#navDrop');
    
    nav.addEventListener('click', () => {
        if (navDrop.current.style.display === '') {
            navDrop.current.style.display = "block";
        }
    });
    nav.addEventListener('click', () => {
        if (navDrop.current.style.display === 'block') {
            navDrop.current.style.display = '';
        }
    })
*/
export default HeaderAboutUs;