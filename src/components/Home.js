import  ReactDOM  from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faDollarSign, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import Header from './Headers/HeaderMain.js';
import '../styles/Home.scss';
import React from 'react';
import fish from '../images/fish.png';
import spaghetti from '../images/spaghetti.png';
import pizza from '../images/pizza.png';
import dish from '../images/dish.png';
import fries from '../images/fries.png';
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
                
                </div>
                </div>
                <div id = "howItWorks">
                    <span id = "howItWorksSpan">How it works</span>
                    <p>Lorem Ipsum is simply dummy text of the prinitng and typersetting industry<br></br>
                    Lorem Ipsum has been the industry</p>
                    <div id = "orderNow" className = "howItWorks">
                        <div id = "orderNowCircle" className = "howItWorksCircles">
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
                        <button className = "addToCart"></button>
                        <button className = "shareDish"></button>
                    </div>
                    <div className = "menuItems">
                        <img src = {fries}></img>
                        
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart"></button>
                        <button className = "shareDish"></button>
                    </div>
                    <div className = "menuItems">
                        <img src = {pizza}></img>
                        
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart"></button>
                        <button className = "shareDish"></button>
                    </div>
                    <div className = "menuItems">
                        <img src = {dish}></img>
                        
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart"></button>
                        <button className = "shareDish"></button>
                    </div>
                    <div className = "menuItems">
                        <img src = {spaghetti}></img>
                        
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart"></button>
                        <button className = "shareDish"></button>
                    </div>
                    <div className = "menuItems">
                        <img src = {fish}></img>
                        
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart"></button>
                        <button className = "shareDish"></button>
                    </div>
                    <div className = "menuItems">
                        <img src = {pizza}></img>
                        
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart"></button>
                        <button className = "shareDish"></button>
                    </div>
                    <div className = "menuItems">
                        <img src = {fries}></img>
                        
                        <span>New York Vega</span>
                        <p>Lorem Ipsum is simply dummy text of<br></br>
                        the printing and typersetting...</p>
                        <span>$7.10</span>
                        <button className = "addToCart"></button>
                        <button className = "shareDish"></button>
                    </div>
                </div>
            
        </div>
    )
}

export default Home;