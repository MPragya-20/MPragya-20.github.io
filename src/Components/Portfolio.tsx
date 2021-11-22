import React from 'react'
import { LinearProgress } from '@material-ui/core'
import Calculator from '../Assets/Calculator.png'
const Portfolio:React.FC = () => {
    const works = [
        {
            id:1,
            Title:"Photo-Search-Gallery-Using-React-JS",
            pic : "https://user-images.githubusercontent.com/68287824/138558100-a4e6e7a3-daf9-46cd-8981-e401dbc3e527.png"
        },
        {
            id:2,
            Title:"React-Calculator",
            pic : Calculator
        },
        {
            id:3,
            Title:"Chat App (Coming Soon)",
            pic : "https://files.muzli.space/0b850b531b9a27c1af9465edebd48e7c.jpeg"
        },
        {
            id:4,
            Title:"Tic-Tac-Toe interactive board",
            pic : "https://github.com/MPragya-20/pragyamukherjee.github.io/blob/main/Tic2.png?raw=true"
        },
        {
            id:5,
            Title:"weather-tracker app",
            pic : "https://res.cloudinary.com/practicaldev/image/fetch/s--dSTsIwRh--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/szfxwsiolnt9w7gdbxek.png"
        },
        {
            id:6,
            Title:"To-do app",
            pic : "https://github.com/MPragya-20/To-do/blob/main/public/Images/todoIcon.png?raw=true"
        },
        {
            id:7,
            Title:"Face-Detection-using-Python-and-OpenCV ",
            pic : "https://image.shutterstock.com/image-photo/back-school-600w-398203714.jpg"
        },
        {
            id:8,
            Title:"emojiSearch app",
            pic : "https://user-images.githubusercontent.com/68287824/137591844-d73b0430-8134-4745-b5fb-c6efec34286f.png"
        },
    ]
    return (
        <div id = "portfolio">
            <div style={{"display":"flex","justifyContent":"space-between"}}>
                <div  className ="Second-div aboutme bg-dark" style={{"width":"85%","justifyContent":"center","marginTop":"0px"}}>
                    <div>
                        <h3 style={{"fontFamily":"cursive"}}>My Portfolio </h3>
                        <LinearProgress variant= "indeterminate"/>
                        <div className="port-outermost">
                            
                            {
                                works.map((eachWork)=>(
                                    <div key = {eachWork.id}>
                                        <div className ="port-outer-each">
                                            <div><img className="port-images" src={eachWork.pic} alt="" /></div>
                                            <small>{eachWork.Title} </small>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Portfolio
