import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import AboutUs from './AboutUs.js';
import Menu from './Menu.js';
import Blog from './Blog';
import Contact from './Contact';



const Routing = () => {
    return (
        <Routes>
            <Route exact path = '/' element = {<Home/>}></Route>
            <Route exact path = '/AboutUs' element = {<AboutUs/>}></Route>
            <Route exact path = '/Menu' element = {<Menu/>}></Route>
            <Route exact path = '/Blog' element = {<Blog/>}></Route>
            <Route exact path = '/Contact' element = {<Contact/>}></Route>
        </Routes>
    )
}

export default Routing;