import React from 'react'
import Logo from '../Assets/Logo.png'
import girl from '../Assets/girl.jpg'
import ScrollAnimation from "react-animate-on-scroll"
import Timeline from '@material-ui/lab/Timeline'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineContent from '@material-ui/lab/TimelineContent'
import { LinearProgress } from '@material-ui/core'
const Home:React.FC = () => {
    return (
        <>
            <div className="outer-home" style={{"display":"flex","justifyContent":"space-around"}}>
                
                    <div className="pages" style={{"marginTop":"100px"}}>
                        <div ><img id="homelogo" src={Logo} alt="" /></div>
                    </div>
                    <div className ="Second-div">
                            Hello, 
                            I am <h3><em>Pragya Mukherjee</em></h3> <br />
                            a Tech Enthusiast from Kolkata, India
                    </div>
                    
                
            </div>

            <ScrollAnimation
            animateIn="bounceInLeft"
            animateOut="fadeOut"
            duration={1.2}
          >
                <div className ="Second-div" id="aboutme" style={{"backgroundColor":"rgb(0,100,255)",color:"white"}}>
                        <div>
                            <img style={{"width":"150px","borderRadius":"50%",'boxShadow' : '3px 4px 5px #444444'}} src={girl} alt="" />
                        </div>

                        <div>
                            <h3 style={{"fontFamily":"cursive"}}>Who am I ?</h3>
                            <p style={{"textAlign":"center"}}>I am a tech enthusiast, currently on my way to explore more of Technologies
                                <br />
                                I love to create new and interesting stuffs through my coding skills.
                                <br /> <br />
                                Other than coding, <br /> I love to draw realism 🖌🎨 and also listen to music🎵 <br /> <br />
                            </p>
                            <div>
                               <strong> My educational background:</strong>
                            </div>
                            <Timeline>
                                <TimelineItem>
                                    <TimelineSeparator>
                                    <TimelineDot color= "secondary" />
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent><strong>Amity University Kolkata</strong> <br /><small>Bachelor of Technology (CSE) <span>2019-2923</span></small><br /><br /></TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                    <TimelineDot color="primary"/>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent><strong>Aditya Academy Senior Seconadry School</strong> <small>Senior secondary Education - 2017-2019</small><br /><br /></TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineDot color="secondary"/>
                                    <TimelineContent><strong>Ramakrishna Vivekananda Mission</strong> <small>Secondary Education</small></TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </div>
                </div>
            </ScrollAnimation>


            <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" duration={1.6} delay={0.8}>
                <div className ="Second-div" id="aboutme" style={{"backgroundColor":"violet"}}>
                       
                        <div>
                            <h2 style={{"fontFamily":"cursive"}}>My experience</h2>
                            <Timeline>
                                <TimelineItem>
                                    <TimelineSeparator>
                                    <TimelineDot color= "secondary" />
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent><strong>Aniworks</strong> <br /><small>Software Engineer Intern <span>2021-Present</span></small><br /><br /></TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                    <TimelineDot color="primary"/>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent><strong>The Entrepreneurship Network</strong> <br /> <small>React Developer Associate</small><br /><br /></TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineDot color="secondary"/>
                                    <TimelineContent><strong>CodeSpeedy Technology Pvt Ltd </strong><small> (Python Programmer)</small></TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </div>
                </div>
            </ScrollAnimation>

            <ScrollAnimation
            animateIn="bounceInLeft"
            animateOut="fadeOut"
            duration={1.2}
          >
                <div className ="Second-div" id="aboutme" style={{"justifyContent":"space-between"}}>
                        

                        <div>
                            <h3 style={{"fontFamily":"cursive"}}>Tools and Technologies </h3>
                            <div>
                            <LinearProgress variant= "determinate"/>
                            This website is underprogress.
                            <br />
                            Thanks for your patience
                            </div>
                        </div>
                        <div>
                            <img style={{"width":"150px","borderRadius":"50%",'boxShadow' : '3px 4px 5px #444444'}} src={girl} alt="" />
                        </div>
                </div>
            </ScrollAnimation>
        </>
    )
}

export default Home
