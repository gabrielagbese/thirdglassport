import * as React from "react"
import { useEffect } from "react";
import gsap from "gsap";
import memoji from "../images/mem.png"
import { SlSocialLinkedin } from "react-icons/sl"
import { CgFileDocument } from "react-icons/cg"
import { useState } from "react";
import TextAnimation from "react-text-animations";
import Form from "./Form";

const Contact = ({fn}) => {

    useEffect(() => {
        
    },);
    
    return(
        <div className="wrapper2 text">
            <div className="content2">
                <div className="contact section">
                    <div className="contactside">
                    <h1 className="random-word">
                        
                    </h1>
                        <div className="sociallinks"> 
                            <span><p>linkedin</p></span>
                            <span><p>github</p></span>
                            <span><p>twitter</p></span>
                        </div>
                    </div>
                    <div className="contactcontent blur">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;