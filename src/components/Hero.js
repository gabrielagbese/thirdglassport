import * as React from "react"
import { useEffect } from "react";
import gsap from "gsap";
import memoji from "../images/mem.png"
import { SlSocialLinkedin } from "react-icons/sl"
import { CgFileDocument } from "react-icons/cg"
import { useState } from "react";
import TextAnimation from "react-text-animations";

const Hero = ({fn}) => {

    useEffect(() => {
        
    },);
    
    return(
        <div className="wrapper2 text">
            <div className="content2">
               <div className="hero">
                    <div className="herowrapper">
                        <p className="hellotext"></p>
                        <p className="nametext">Gabriel Agbese</p>
                        <p className="roletext">Creative <span className="gradienttext">Frontend</span> Developer</p>
                        <p className="shorttext">I specializing in designing and building unique digital experiences.</p>
                        <div className="opportunities blur">
                            <p className="available">Available for:</p>
                            <div className="opportunityname blur">Internships</div>
                            
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Hero;