
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faDollarSign, faTruckFast, faScroll, faCarrot, faLemon, faPepperHot,
     faAppleWhole, faLeaf, faPizzaSlice, faCartPlus, faShareNodes, faArrowLeft,
      faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import Header from './Headers/HeaderMain.js';
import '../styles/Home.scss';
import React from 'react';
import fish from '../images/fish.png';
import spaghetti from '../images/spaghetti.png';
import pizza from '../images/pizza.png';
import dish from '../images/dish.png';
import fries from '../images/fries.png';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import orange from '../images/orange.png';
import mainDish from '../images/mainDish.png';
import Footer from './Footer.js';
import googlePlayIcon from '../images/GooglePlay.png';
import phoneApp from '../images/phoneApp.png';
import '../styles/mobileMain.scss';


function Home() {
    
    return (
        <div className = "Home">
            <Header/>    
            <div id = "getStarted">
                <div id = "leftMain">
                <div id = "fastDelivery">
                    <span>Fast Delivery</span>
                </div>
                    <p>Discover Your Favourite <br></br>Food and Test Forever</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typersetting<br></br>
                        industry. Lorem Ipsum has been the industry's standard dummy<br></br>
                        text ever since the 1500s.
                    </p>
                    <div id = "getStartedButtons">
                    <button id = "getStartedButton">Get Started</button>
                    <button id = "watchVideo">
                    <FontAwesomeIcon icon={faCirclePlay} fontSize = "25px" color = "#FCC647"/>
                    </button>
                    <span>More Information</span>
                    </div>
                </div>
                <div id = "rightMain">
                    <FontAwesomeIcon icon = {faCarrot} id = "carrot" className = "foodIcons"/>
                    <FontAwesomeIcon icon = {faLemon} id = "lemon" className = "foodIcons"/>
                    <FontAwesomeIcon icon = {faPepperHot} id = "pepper" className = "foodIcons"/>
                    <FontAwesomeIcon icon = {faAppleWhole} id = "appleWhole" className = "foodIcons"/>
                    <FontAwesomeIcon icon = {faLeaf} id = "leaf" className = "foodIcons"/>
                    <FontAwesomeIcon icon = {faPizzaSlice} id = "pizza" className = "foodIcons"/>
                    <img src = {mainDish} id = "mainDish"/>
                    <img src = {orange} id = "orangeImg"/>
                </div>
                </div>
                <div id = "howItWorks">
                    <span id = "howItWorksSpan">How it works</span>
                    <p>Lorem Ipsum is simply dummy text of the prinitng and typersetting industry<br></br>
                    Lorem Ipsum has been the industry</p>
                    <div id = "orderNow" className = "howItWorks">
                        <div id = "orderNowCircle" className = "howItWorksCircles">
                            <FontAwesomeIcon icon = {faScroll} font-size = "40px" color = "white" id = "faScroll"/>
                        </div>
                            <span>Order Now</span>
                            <p>Lorem Ipsum is a simply dummy text of the<br></br>
                            printing and typersetting industry. Lorem Ipsum has been the industry</p>
                        
                    </div>
                    <div id = "getDelivery" className = "howItWorks">
                    <div id = "getDeliveryCircle" className = "howItWorksCircles">
                    <FontAwesomeIcon icon={faTruckFast} font-size = "40px" color = "white" id = "faTruck"/>
                    </div>
                            <span>Get Delivery</span>
                            <p>Lorem Ipsum is a simply dummy text of the<br></br>
                            printing and typersetting industry. Lorem Ipsum has been the industry</p>
                        
                        </div>
                        <div id = "payment" className = "howItWorks">
                        <div id = "paymentCircle" className = "howItWorksCircles">
                            <FontAwesomeIcon icon = {faDollarSign} font-size = "40px" color = "white" id = "faDollar"/>
                        </div>
                            <span>Payment</span>
                            <p>Lorem Ipsum is a simply dummy text of the<br></br>
                            printing and typersetting industry. Lorem Ipsum has been the industry</p>
                        </div>
                </div>
                <div id = "menu">
                    <span>Our Delicious Dish</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting<br></br> industry. Lorem Ipsum has been the industry</p>
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
                </div>
                <div id = "pageChooseCircles">
                    <div id = "leftArrow" className = "pageChooseCircles">
                        <FontAwesomeIcon icon = {faArrowLeft} id = "leftArrowIcon"/>
                    </div>
                    <div id = "one" className = "pageChooseCircles">
                        <span>1</span>
                    </div>
                    <div id = "two" className = "pageChooseCircles">
                        <span>2</span>
                    </div>
                    <div id = "three" className = "pageChooseCircles">
                        <span>3</span>
                    </div>
                    <div id = "four" className = "pageChooseCircles">
                        <span>4</span>
                    </div>
                    <div id = "five" className = "pageChooseCircles">
                        <span>5</span>
                    </div>
                    <div id = "rightArrow" className = "pageChooseCircles">
                        <FontAwesomeIcon icon = {faArrowRight} id = "rightArrowIcon"/>
                    </div>
                </div>
                <div id = "downloadTheApp">
                    <p>To Get 15% Discount<br></br>
                    Download The App</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typersetting<br></br>
                    industry. Lorem Ipsum has been teh industry's standard dummy<br></br> text ever since 1500s.</p>
                    <div id = "stores">
                    <button id = "googlePlay" className = "stores">
                        <img src =  {googlePlayIcon} id = "googlePlayIcon"></img>
                        <span>Download on</span>
                        <span>Google</span>
                        <span>play</span>
                    </button>
                    <button id = "appStore" className = "stores">
                        <FontAwesomeIcon icon = {faApple} id = "appStoreIcon"/>
                        <span>Download on the</span>
                        <span>App Store</span>
                    </button>
                    </div>
                    <div id = "mobileApp">
                        <div id = "phoneAroundCircle"></div>
                        <img src = {phoneApp}></img>
                    </div>

                </div>
                <Footer/>
        </div>
    )
}

export default Home;