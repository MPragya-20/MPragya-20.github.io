import React from 'react'

const ContactMe:React.FC = () => {
    return (
        <div id="contact" className="Second-div" style={{"textAlign":"center","fontSize":'1.2rem',"boxShadow":"3px 5px 6px black"}}>
            <small>For further inquiries drop me a message here:</small> <br />
            <textarea name="message" id="message" cols={35} rows = {3} placeholder="Start typing here..."></textarea> <br />
            <a href="/"><button className="btn submit" style={{"backgroundColor":"rgb(204, 14, 125)","color":"white","padding":"10px 25px","boxShadow":"3px 4px 5px grey"}}>Submit</button></a>
        <br /><br />
            <small className="text-dark">&copy; 2021 Pragya Mukherjee. All rights reserved.</small>
        </div>
    )
}

export default ContactMe
