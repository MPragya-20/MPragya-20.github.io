import React from 'react'
import ScrollAnimation from "react-animate-on-scroll"
import Timeline from '@material-ui/lab/Timeline'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineContent from '@material-ui/lab/TimelineContent'
import { LinearProgress } from '@material-ui/core'
import girl from '../Assets/girl.jpg'
import work from '../Assets/work.jpg'
import Portfolio from './Portfolio'
import ContactMe from './ContactMe'


const AboutMe:React.FC = () => {
    const tools = [
        {
            id:1,
            tool:"Python",
            progress:"60%"
        },
        {
            id:2,
            tool:"C++",
            progress:"70%"
        },
        {
            id:3,
            tool:"JavaScript",
            progress:"60%"
        },
        {
            id:4,
            tool:"HTML",
            progress:"80%"
        },
        {
            id:5,
            tool:"CSS",
            progress:"70%"
        },
        {
            id:6,
            tool:"React JS",
            progress:"65%"
        },
        {
            id:7,
            tool:"Bootstrap/Material UI",
            progress:"50%"
        },
        {
            id:8,
            tool:"PHP",
            progress:"45%"
        },
        {
            id:9,
            tool:"Typescript",
            progress:"75%"
        },
        {
            id:10,
            tool:"SQLi",
            progress:"55%"
        }
    ]
    return (
        <div>
            <div className="pages">
            <div style={{'backgroundColor':"white","width":"100%","padding":"1px 10px 20px 10px","marginTop":"30px"}}>
            <ScrollAnimation
            animateIn="bounceInLeft"
            animateOut="fadeOut"
            duration={1.2}
          >
                <div className ="Second-div aboutme" style={{"backgroundColor":"rgb(0,100,255)",color:"white","marginTop":"20px"}}>
                        <div>
                            <img style={{"width":"150px","borderRadius":"50%",'boxShadow' : '3px 4px 5px #444444'}} src={girl} alt="" />
                        </div>

                        <div>
                            <h3 style={{"fontFamily":"cursive"}}>Who am I ?</h3>
                            <LinearProgress variant= "indeterminate"/>
                            <p style={{"textAlign":"center"}}>I am a tech enthusiast, currently on my way to explore more of Technologies.
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
                                    <TimelineContent><strong>Amity University Kolkata</strong> <br /><small>Bachelor of Technology (CSE) <span>2019-2023</span></small><br /><br /></TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                    <TimelineDot color="primary"/>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent><strong>Aditya Academy Senior Seconadry School</strong> <small>(Senior secondary Education) - 2017-2019</small><br /><br /></TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineDot color="secondary"/>
                                    <TimelineContent><strong>Ramakrishna Vivekananda Mission</strong> <small>(Secondary Education)</small></TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </div>
                </div>
            </ScrollAnimation>
            </div>

            
            <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" duration={1.6} delay={0.8}>
                <div className ="Second-div aboutme" style={{"backgroundColor":"violet","marginTop":"20px","display":"flex","justifyContent":"space-between"}}>
                       
                        <div>
                            <h2 style={{"fontFamily":"cursive"}}>My experience</h2>
                            <LinearProgress variant="indeterminate" />
                            <Timeline>
                                <TimelineItem>
                                    <TimelineSeparator>
                                    <TimelineDot color= "secondary" />
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent><strong>Aniworks</strong> <br /><small>Software Engineer Intern <span>(2021-Present)</span></small><br /><br /></TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                    <TimelineDot color="primary"/>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent><strong>The Entrepreneurship Network</strong> <br /> <small>React Developer Associate Intern- (Aug-Nov, 2021)</small><br /><br /></TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineDot color="secondary"/>
                                    <TimelineContent><strong>CodeSpeedy Technology Pvt Ltd </strong><small> (Source Code Provider)-2 months</small></TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </div>
                        <div><img style={{"width":"100px","borderRadius":"50%",'boxShadow' : '3px 4px 5px #444444'}} src={work} alt="" /></div>
                </div>
            </ScrollAnimation>

            <ScrollAnimation
            animateIn="bounceInLeft"
            animateOut="fadeOut"
            duration={1.2}
          >
                    <div style={{"display":"flex","justifyContent":"space-between"}}>
                        <div className ="Second-div aboutme" style={{"width":"85%","justifyContent":"center"}}>
                        <div>
                            <img style={{"width":"100px","borderRadius":"50%",'boxShadow' : '3px 4px 5px #444444'}} src={girl} alt="" />
                        </div>
                            <div>
                                <h3 style={{"fontFamily":"cursive"}}>Tools and Technologies </h3>
                                <div>
                                    <LinearProgress variant= "indeterminate"/>
                                    {
                                        tools.map((exp)=>(
                                            <div key = {exp['id']} style={{"display":"flex","justifyContent":"space-between","margin":"10px"}}> 
                                                <div><small>{exp.tool}</small> 
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: exp.progress}}>
                                                        {exp.progress}
                                                    </div> 
                                                </div>
                                            </div>
                                        ))
                                    }
                                    Tools:

                                     <em>VS Code, Jupyter Notebook, Pycharm</em>
                                </div>
                            </div>
                            
                        </div>
                
                    </div>
                    <div className="hanger">
                        <div></div>
                        <div></div>
                    </div>
            </ScrollAnimation>
            
            <Portfolio />
            <ContactMe />
        </div>
        </div>
    )
}

export default AboutMe
