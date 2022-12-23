import * as React from "react"
import { useEffect } from "react";
import gsap from "gsap";
import memoji from "../images/mem.png"
import { SlSocialLinkedin } from "react-icons/sl"
import { CgFileDocument } from "react-icons/cg"



const About = ({ fn }) => {

    useEffect(() => {

        var biotab = document.getElementsByClassName("biotab")[0]
        var skillstab = document.getElementsByClassName("skillstab")[0]
        var biotabradio = document.getElementById("biotabradio")
        var skillstabradio = document.getElementById("skillstabradio")
        var check = biotabradio.checked;
        var first = document.getElementById("first")
        var second = document.getElementById("second")

        if (check) {
            first.classList.add("activeTab");
            biotab.classList.add("highlightTab");
        }


        biotabradio.addEventListener("click", function () {
            skillstabradio.checked = false;
            check = this.checked
            second.classList.remove("activeTab")
            skillstab.classList.remove("highlightTab")
            first.classList.add("activeTab")
            biotab.classList.add("highlightTab")
        });

        skillstabradio.addEventListener("click", function () {
            biotabradio.checked = false;
            check = this.checked
            first.classList.remove("activeTab")
            biotab.classList.remove("highlightTab")
            second.classList.add("activeTab")
            skillstab.classList.add("highlightTab")
        });

    },);

    return (
        <div className="wrapper2 text">
            <div className="content2">
                <div className="about section abouttext">
                    <div className="side">
                        <div className="">
                            <p className="bigtext header">About</p>
                            <div className="classname"></div>
                        </div>
                        <div className="linksbio">
                            <div className="links midtext"><img src={memoji} alt="BigCo Inc. logo" className="memoji" /></div>
                            <div className="biotext smalltext">
                                <div className="about-button blur midtext">
                                    <p className="smidtext"><a className="default-link" href="https://www.linkedin.com/in/gabriel-agbese/" target="_blank">Linkedin</a></p>
                                    <SlSocialLinkedin className="icon" />
                                </div>
                                <div className="about-button blur midtext">
                                    <p className="smidtext"><a className="default-link" href="./CV-December-2023(2).pdf" target="_blank">Resume</a></p>
                                    <CgFileDocument className="icon" />
                                </div>
                            </div>
                        </div>
                        <div className="firstskills blur smalltext">
                            <p className="list-header">Languages:</p>
                            <ul className="skill-list">
                                <li>Java</li>
                                <li>Python</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript &#40;ES 6+&#41;</li>
                            </ul>
                            <p className="list-header">Tools and Frameworks:</p>
                            <ul className="skill-list">
                                <li>Git</li>
                                <li>Eclipse</li>
                                <li>Visual Studio</li>
                                <li>VS Code</li>
                                <li>React</li>
                            </ul>
                            <ul className="skill-list">
                                <li>Next JS</li>
                                <li>Gatsby</li>
                                <li>SCSS</li>
                                <li>Tailwind</li>
                            </ul>
                            <p className="list-header">Operating Systems:</p>
                            <ul className="skill-list">
                                <li>Windows</li>
                                <li>Android</li>
                                <li>Linux</li>
                            </ul>
                        </div>
                    </div>
                    <div className="swaptab blur">
                        <div className="biotab">
                            <input type="radio" id="biotabradio" checked></input>
                            <label for="biotabradio">Bio</label>
                        </div>
                        <div className="skillstab">
                            <input type="radio" id="skillstabradio"></input>
                            <label for="skillstabradio">Skills</label>
                        </div>
                    </div>
                    <div className="bio blurbio">
                        <div className="someData " id="first">
                            <p className="bio-content"></p>
                            {/* <p className="bio-content">I’m a front-end web developer in my final year at the University of Debrecen. I have a passion for crafting unique layouts and interactions.</p>
                            <p className="bio-content">I'm perpetually working to improve my skills to deliver the best service possible.</p> */}
                            <p className="bio-content"> As a creative frontend developer, I focus on both design and development — allowing me to work on projects from concept until the very moment we hit publish. Unique layouts, interactions and great typography is what I focus on when working on websites.</p>
                            <p className="bio-content">I am currently in my final year at the University of Debrecen.</p>
                            <p className="bio-content">I am currently interested in and available for remote, internship, and freelance  positions.</p>

                        </div>
                        <div className="someData" id="second"><p className="list-header">Languages:</p>
                            <ul className="skill-list">
                                <li>Java,</li>
                                <li>Python,</li>
                                <li>HTML,</li>
                                <li>CSS,</li>
                            </ul>
                            <ul className="skill-list">
                                <li>JavaScript &#40;ES 6+&#41;</li>
                            </ul>
                            <p className="list-header">Tools and Frameworks:</p>
                            <ul className="skill-list">
                                <li>Git,</li>
                                <li>Eclipse,</li>
                                <li>Visual Studio,</li>
                                <li>VS Code,</li>
                                <li>React,</li>
                            </ul>
                            <ul className="skill-list">
                                <li>Next JS,</li>
                                <li>Gatsby,</li>
                                <li>SCSS,</li>
                                <li>Tailwind</li>
                            </ul>
                            <p className="list-header">Operating Systems:</p>
                            <ul className="skill-list">
                                <li>Windows,</li>
                                <li>Android,</li>
                                <li>Linux</li>
                            </ul></div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default About;