import * as React from "react"
import { useEffect } from "react";
import gsap from "gsap";
import memoji from "../images/mem.png"
import { SlSocialLinkedin } from "react-icons/sl"
import { CgFileDocument } from "react-icons/cg"
import { useState } from "react";
import Typewriter from 'typewriter-effect';
import TextAnimation from "react-text-animations";

const Hero = ({ fn }) => {

    useEffect(() => {

    },);

    return (
        <div className="wrapper2 text">
            <div className="content2">
                <div className="hero">
                    <div className="hero-underlier">
                        <div className="hero-light"></div>
                        <div className="hero-stars">
                            <div class="starsi"></div>
                            <div class="twinkling"></div>
                        </div>
                    </div>
                    <div className="herowrapper ">
                        <div className="top-space"></div>
                        <div className="hey-there">Hello there, I'm-</div>
                        <div className="first-name">Gabriel Agbese</div>
                        <div className="description"><span className="darker"> A </span>Frontend Developer,<span className="darker"> with a passion for custom layouts and interactions.</span></div>
                        <div className="opportunity">
                            <p>Available for&ensp; </p>
                            <Typewriter
                                options={{
                                    strings: ['Remote','Internship', 'Part-Time','Freelance'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            <p>&ensp;Opportinities</p>
                        </div>
                        <div className="hero-links">
                                <div className="link blur"><a className="default-link" href="https://github.com/gabrielagbese" target="_blank">Github</a></div>
                                <div className="link blur"><a className="default-link" href="https://www.linkedin.com/in/gabriel-agbese/" target="_blank">Linkedin</a></div>
                                <div className="link blur" onClick={(e) => {window.location.href ='mailto:gabriel.agbese2001@gmail.com';}} >Email</div>
                            </div>
                        <div className="planet"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;