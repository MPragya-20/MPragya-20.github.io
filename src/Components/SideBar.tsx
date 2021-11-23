import React from 'react'
import {List, ListItem} from '@material-ui/core'
import Github from '../Assets/Github.jpg'
import Linkedin from '../Assets/Linkedin.jpg'


const SideBar:React.FC = () => {
    return (
        <div>
            <List className="sideBar" component="nav" style={{"overflow":"hidden","marginTop":"90px"}}>
                <ListItem className="sidebar-list"><a href="https://github.com/MPragya-20"><img className="social" src={Github} alt="" /></a></ListItem>
                <ListItem className="sidebar-list"><a href="https://www.linkedin.com/in/pragyamukherjee/"><img className="social"src={Linkedin} alt="" /></a></ListItem>
                <hr/>
                <ListItem className="sidebar-list"><a href="#hero"><i style={{"color":"white"}} className="fa fa-home"><br /> <small>Home</small></i></a></ListItem>
                <ListItem className="sidebar-list"><a href="#portfolio"><i style={{"color":"white"}} className="fa fa-briefcase"><br /> <small>Works</small></i></a></ListItem>

            </List> 
        </div>
    )
}

export default SideBar
