import * as React from "react"
import gsap from "gsap"
import memoji from "../images/mem.png"
import "./layout.css"
import ScrollContainer from 'react-indiana-drag-scroll'
import Projectitem from "./Projectitem"




const Projects = ({fn}) => {

    if(window.innerWidth >= 720){
        let width = 500;
        let height = 250;
    }

    return(
        <div className="wrapper2 text">
            <div className="content2">
            <div className="project sectionextended abouttext">
                <div className="projectside">
                    <p className=" bigtext">Projects</p>
                    <div className="projectside-content">
                        <p>I love building projects and practicing my engineering skills, here are some of the things that I've worked on.</p>
                        <p>(Drag to explore)</p>
                    </div>
                </div>
                <div className="projectcontent ">
                    <ScrollContainer className="projectswrapper " vertical={false}>
                        <div className="space"></div>
                        <div className="projectitem blur midtext">
                            <Projectitem 
                                img="https://picsum.photos/250/125"
                                name="Fridge"
                                first="React  X"
                                second="Gatsby  G"
                                third="SCSS  S"
                                description="Fridge app description text."
                            />
                        </div>
                        <div className="projectitem blur midtext">
                            <Projectitem
                                img="https://picsum.photos/250/125"
                                name="CAVIC"
                                first="Vue  V"
                                second="Mongo DB "
                                third="SCSS  S"
                                description="Creative Arts and Visual Imagery Center"
                            />
                        </div>
                        <div className="projectitem blur midtext">
                            <Projectitem 
                                img="https://picsum.photos/250/125"
                                name="Philipagbese"
                                first="React  R"
                                second="Python  P"
                                third="Tailwind  T"
                                description="Website for photographer Philip Agbese"
                            />
                        </div>
                        <div className="space2"></div>
                    </ScrollContainer>
                </div>
            </div>
        </div> 
        </div>
    ) 
}


console.log("reached")




export default Projects;