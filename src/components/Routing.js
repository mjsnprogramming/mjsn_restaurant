import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import AboutUs from './AboutUs.js';
import Service from './Service.js';
import Products from './Products';
import Contact from './Contact';



const Routing = () => {
    return (
        <Routes>
            <Route exact path = '/' element = {<Home/>}></Route>
            <Route exact path = '/AboutUs' element = {<AboutUs/>}></Route>
            <Route exact path = '/Service' element = {<Service/>}></Route>
            <Route exact path = '/Products' element = {<Products/>}></Route>
            <Route exact path = '/Contact' element = {<Contact/>}></Route>
        </Routes>
    )
}

export default Routing;