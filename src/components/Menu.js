import HeaderMenu from './Headers/HeaderMenu.js';
import '../styles/Menu.scss';
import FooterMenu from './Footers/FooterMenu.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fish from '../images/fish.png';
import spaghetti from '../images/spaghetti.png';
import pizza from '../images/pizza.png';
import dish from '../images/dish.png';
import fries from '../images/fries.png';
import { faCartPlus, faShareNodes, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
function Menu() {
    return (
        <div className = "Menu">
            <HeaderMenu/>

                <div id = "menuHeaderImg">
                    <span>Menu</span>
                </div>

                <div id = "menuNavbar">
                    <ul>
                        <li><button tabIndex={0} id = "buttonAll">All</button></li>
                        <li><button tabIndex={0}>Breakfast</button></li>
                        <li><button tabIndex={0}>Lunch</button></li>
                        <li><button tabIndex={0}>Dinner</button></li>
                        <li><button tabIndex={0}>Drinks</button></li>
                        <li><button tabIndex={0}>Our Special Recipes</button></li>
                        <li><button tabIndex={0}>Others</button></li>
                    </ul>
                </div>

                <div id = "menuHeaderSpan">
                    <span>Explore The New Test</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typersetting<br></br>
                            industry. Lorem Ipsum has been the industry.</p>
                </div>

                <div id = "menuItems">
                    <div className = "menuItems">
                        <img src = {fish}></img>
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart">
                            <FontAwesomeIcon icon = {faCartPlus}/>
                        </button>
                        <button className = "shareDish">
                            <FontAwesomeIcon icon = {faShareNodes}/>
                        </button>
                    </div>

                    <div className = "menuItems">
                        <img src = {fries}></img> 
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart">
                            <FontAwesomeIcon icon = {faCartPlus}/>
                        </button>
                        <button className = "shareDish">
                            <FontAwesomeIcon icon = {faShareNodes}/>
                        </button>
                    </div>

                    <div className = "menuItems">
                        <img src = {pizza}></img>
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart">
                            <FontAwesomeIcon icon = {faCartPlus}/>
                        </button>
                        <button className = "shareDish">
                            <FontAwesomeIcon icon = {faShareNodes}/>
                        </button>
                    </div>

                    <div className = "menuItems">
                        <img src = {dish}></img>
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart">
                            <FontAwesomeIcon icon = {faCartPlus}/>
                        </button>
                        <button className = "shareDish">
                            <FontAwesomeIcon icon = {faShareNodes}/>
                        </button>
                    </div>

                    <div className = "menuItems">
                        <img src = {spaghetti}></img>
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart">
                            <FontAwesomeIcon icon = {faCartPlus}/>
                        </button>
                        <button className = "shareDish">
                            <FontAwesomeIcon icon = {faShareNodes}/>
                        </button>
                    </div>

                    <div className = "menuItems">
                        <img src = {fish}></img>
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart">
                            <FontAwesomeIcon icon = {faCartPlus}/>
                        </button>
                        <button className = "shareDish">
                            <FontAwesomeIcon icon = {faShareNodes}/>
                        </button>
                    </div>

                    <div className = "menuItems">
                        <img src = {pizza}></img>
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart">
                            <FontAwesomeIcon icon = {faCartPlus}/>
                        </button>
                        <button className = "shareDish">
                            <FontAwesomeIcon icon = {faShareNodes}/>
                        </button>
                    </div>

                    <div className = "menuItems">
                        <img src = {fries}></img>
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart">
                            <FontAwesomeIcon icon = {faCartPlus}/>
                        </button>
                        <button className = "shareDish">
                            <FontAwesomeIcon icon = {faShareNodes}/>
                        </button>
                    </div>

                    <div className = "menuItems">
                        <img src = {fries}></img>
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart">
                            <FontAwesomeIcon icon = {faCartPlus}/>
                        </button>
                        <button className = "shareDish">
                            <FontAwesomeIcon icon = {faShareNodes}/>
                        </button>
                    </div>

                    <div className = "menuItems">
                        <img src = {fries}></img>
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart">
                            <FontAwesomeIcon icon = {faCartPlus}/>
                        </button>
                        <button className = "shareDish">
                            <FontAwesomeIcon icon = {faShareNodes}/>
                        </button>
                    </div>

                    <div className = "menuItems">
                        <img src = {pizza}></img>
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart">
                            <FontAwesomeIcon icon = {faCartPlus}/>
                        </button>
                        <button className = "shareDish">
                            <FontAwesomeIcon icon = {faShareNodes}/>
                        </button>
                    </div>

                    <div className = "menuItems">
                        <img src = {pizza}></img>
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart">
                            <FontAwesomeIcon icon = {faCartPlus}/>
                        </button>
                        <button className = "shareDish">
                            <FontAwesomeIcon icon = {faShareNodes}/>
                        </button>
                    </div>
                </div>

                {/*<div id = "pageChooseCirclesMenu">

                    <div id = "leftArrow" className = "pageChooseCirclesMenu">
                        <FontAwesomeIcon icon = {faArrowLeft} id = "leftArrowIcon"/>
                    </div>

                    <div id = "one" className = "pageChooseCirclesMenu" tabIndex={0}>
                        <span>1</span>
                    </div>

                    <div id = "two" className = "pageChooseCirclesMenu" tabIndex={0}>
                        <span>2</span>
                    </div>

                    <div id = "three" className = "pageChooseCirclesMenu" tabIndex={0}>
                        <span>3</span>
                    </div>

                    <div id = "four" className = "pageChooseCirclesMenu" tabIndex={0}>
                        <span>4</span>
                    </div>

                    <div id = "five" className = "pageChooseCirclesMenu" tabIndex={0}>
                        <span>5</span>
                    </div>

                    <div id = "rightArrow" className = "pageChooseCirclesMenu">
                        <FontAwesomeIcon icon = {faArrowRight} id = "rightArrowIcon"/>
                    </div>
    </div>*/}
            <FooterMenu/>
        </div>
    )
}

export default Menu;