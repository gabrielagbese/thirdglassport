import * as React from "react"
import { useEffect } from "react";
import gsap from "gsap";
import memoji from "../images/mem.png"
import { SlSocialLinkedin } from "react-icons/sl"
import { CgFileDocument } from "react-icons/cg"
import { useState } from "react";
import TextAnimation from "react-text-animations";

const Contact = ({fn}) => {

    useEffect(() => {
        
    },);
    
    return(
        <div className="wrapper2 text">
            <div className="content2">
                <div className="contact section">
                    <div className="contactside">
                    <h1 className="random-word">
                        {/* <TextAnimation.Slide 
                        target="Have an interesting project?" 
                        word="push"
                        text={['Want to collaborate?','Want me on your team?', 'Want to have a chat?',]}
                        animation={{
                            duration:1000,
                            delay:2000,
                            timingFunction:'ease-out',
                        }}
                        >
                        Have an interesting project?
                        </TextAnimation.Slide> */}
                    </h1>
                        <div className="sociallinks"> 
                            <span><p>linkedin</p></span>
                            <span><p>github</p></span>
                            <span><p>twitter</p></span>
                        </div>
                    </div>
                    <div className="contactcontent blur"></div>
                </div>
            </div>
        </div>
    )
}

export default Contact;