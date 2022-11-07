import  ReactDOM  from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core';
import Header from './Header.js';
import '../styles/Home.scss';
import React from 'react';
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
                    <button id = "getStartedButton">Get Started</button>
                    <button id = "watchVideo">
                    
                    </button>
                    <span>More Information</span>
                </div>
                <div id = "rightMain">
                
                </div>
            </div>
        </div>
    )
}

export default Home;