import * as React from "react"
import gsap from "gsap"
import memoji from "../images/mem.png"
import "./layout.css"
import ScrollContainer from 'react-indiana-drag-scroll'




const Projects = ({fn}) => {

    

    return(
        <div className="wrapper2 text">
            <div className="content2">
            <div className="project section abouttext">
                <div className="projectside">
                    <p className=" bigtext">Projects</p>
                </div>
                <div className="projectcontent ">
                    <ScrollContainer className="projectswrapper " vertical={false}>
                        <div className="space"></div>
                        <div className="projectitem blur"></div>
                        <div className="projectitem blur"></div>
                        <div className="projectitem blur"></div>
                    </ScrollContainer>
                </div>
            </div>
        </div> 
        </div>
    ) 
}


console.log("reached")




export default Projects;