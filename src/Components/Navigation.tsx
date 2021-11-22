import React from 'react'
import Logo from '../Assets/Logo.png'
import { HashRouter as Router, Routes, Route } from "react-router-dom"; //Use hashRouter for github pages to understand routes

import { AppBar,Toolbar,Typography} from '@material-ui/core'

import {Link } from '@material-ui/core'
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import SideBar from './SideBar';
import Home from './Home';


const Navigation:React.FC = () => {
    
    return (
        <div className = "mainpageouter" >
            <Router>
                <AppBar style={{backgroundColor:"white","color":"black"}} position="fixed" variant="outlined">
                    <Toolbar>
                        <img src={Logo} alt="" width = "100px"/>
                        <Typography style={{"marginLeft":"auto"}}>
                            <Link className = "nav-item" style={{"textDecoration":"none","marginRight":"10px"}} color="inherit" href="#aboutme">About me</Link>
                            <Link className = "nav-item" style={{"textDecoration":"none","marginRight":"10px"}} color="inherit" href="/contact">Contact me</Link>
                        </Typography>
                        

                    </Toolbar>
                </AppBar>
            <SideBar />


            
                <Routes>
                    <Route path="/" caseSensitive={false} element={<Home />} />
                    <Route path="/about" caseSensitive={false} element={<AboutMe />} />
                    <Route path="/portfolio" caseSensitive={false} element={<Portfolio />} />
                    <Route path="/contact" caseSensitive={false} element={<ContactMe />} />
                </Routes>
            </Router>
            
        </div>
    )
}


export default Navigation
