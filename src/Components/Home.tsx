import React, { useEffect, useState } from 'react'
import Logo from '../Assets/Logo.png'
import girl from '../Assets/girl.jpg'
import wave from '../Assets/wave.gif'
import AboutMe from './AboutMe'
import SideBar from './SideBar';
import { setTimeout } from 'timers'

const Home:React.FC = () => {
    const [showPopup, setShowPopup] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{setShowPopup(1)},3000)
    },[])
    const message = () =>{
        if (showPopup === 0){
            setShowPopup(1)
        }
        else{
            setShowPopup(0)
        }
    }
    return (
        <>
            <SideBar />
            
            <div id="hero" className="outer-home" style={{"display":"flex","justifyContent":"space-around","padding":"100px 5px"}}>
                        
                    <div className="pages" style={{"marginTop":"100px"}}>
                    <div>
                        <img style={{"width":"150px","borderRadius":"50%",'boxShadow' : '6px 6px 57px black'}} src={girl} alt="" />
                    </div>
                        <div ><img id="homelogo" src={Logo} alt="" /></div>
                    </div>
                    <div className ="Second-div" style={{"paddingTop":"10px",'marginBottom':"-80px", "backgroundColor":"transparent","textShadow":"5px 8px 4px grey", "color":"white","backgroundImage":"none","boxShadow":"none"}}>
                    <img src={wave} alt=""  width="100px" className="wave"/> <br />
                                Hello,  <br />
                                I am <h3 style={{"fontFamily":"monospace"}}> Pragya Mukherjee, <small>a Tech Enthusiast from Kolkata, India</small> </h3>
                                
                    </div>
            </div>
            <div className = "message-popup" style ={{"position":"fixed",'visibility': showPopup === 1? "visible":"hidden"}}>
                <i style={{"marginLeft":"90%"}} onClick={message} className="fa fa-times btn text-light" aria-hidden="true"></i>
                <br />
               Hey👋 Pragya here.. <br /> I am really glad to see you!!😍 <br />For more inquiry or hiring purposes, <br />feel free to contact me at <a href="<your-email>@gmail.com"><small> contactme@gmail.com</small></a> 
            </div>
            <div onClick={message} style={{"cursor":"pointer","marginTop":"-30px"}}>
                <img style={{zIndex:4,"width":"50px","borderRadius":"50%",'boxShadow' : '3px 4px 5px #444444',"position":"fixed"}} src={girl} alt="" />
            </div>
            <div id="me"><AboutMe />
            </div>
            
        </>
    )
}

export default Home
