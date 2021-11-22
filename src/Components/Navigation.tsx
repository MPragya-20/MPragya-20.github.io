import React from 'react'
import Logo from '../Assets/Logo.png'

import { AppBar,Toolbar,Typography} from '@material-ui/core'
import {Link } from '@material-ui/core'
import Home from './Home';



const Navigation:React.FC = () => {
    
    return (
        <div className = "mainpageouter" >
                <AppBar style={{backgroundColor:"white ","opacity":"0.6","color":"black"}} position="fixed" variant="outlined">
                    <Toolbar>
                        <img src={Logo} alt="" width = "100px"/>
                        <Typography style={{"marginLeft":"auto"}}>
                            <Link className = "nav-item" style={{"textDecoration":"none","marginRight":"10px"}} color="inherit" href="#me">About me</Link>
                            <Link className = "nav-item" style={{"textDecoration":"none","marginRight":"10px"}} color="inherit" href="#contact">Contact me</Link>
                        </Typography>
                        

                    </Toolbar>
                </AppBar>
            <Home />
            
            

            
                
            
        </div>
    )
}


export default Navigation
