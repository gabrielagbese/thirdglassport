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
                            <div class="stars"></div>
                            <div class="twinkling"></div>
                        </div>
                    </div>
                    <div className="herowrapper ">
                        <div className="top-space"></div>
                        <div className="hey-there">Hello there, I'm-</div>
                        <div className="first-name">Gabriel Agbese</div>
                        <div className="description">Frontend Developer,<span className="darker"> specializing in custom layouts</span></div>
                        <div className="opportunity">
                            <p>Open to&ensp; </p>
                            <Typewriter
                                options={{
                                    strings: ['Internship', 'Part-Time','Freelance'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            <p>&ensp;opportunities</p>
                        </div>
                        <div className="hero-links">
                                <div className="link blur">Github</div>
                                <div className="link blur">LinkedIn</div>
                                <div className="link blur">Email</div>
                            </div>
                        <div className="planet"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;