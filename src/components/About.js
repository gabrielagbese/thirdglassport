import * as React from "react"
import gsap from "gsap";
import memoji from "../images/mem.png"
import { SlSocialLinkedin } from "react-icons/sl"
import { CgFileDocument } from "react-icons/cg"



const About = ({fn}) => {

  
    return(
        <div className="wrapper2 text">
            <div className="content2">
            <div className="about section abouttext">
                <div className="side">
                <div className="header"><p className="bigtext header">About</p></div>
                <div className="linksbio">
                    <div className="links midtext"><img src={memoji} alt="BigCo Inc. logo" className="memoji"/></div>
                    <div className="biotext smalltext">
                        <div className="about-button blur midtext">
                            <p className="smidtext">Linkedin</p>
                            <SlSocialLinkedin className="icon"/>
                        </div>
                        <div className="about-button blur midtext">
                            <p className="smidtext">Resume</p>
                            <CgFileDocument className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="firstskills blur smalltext">java, and co</div>
                </div>
                <div className="bio blur">aaa</div>
                <div className="secondskills blur smalltext"> second skills</div>
            </div>
        </div>
        </div>
    )
}

export default About;