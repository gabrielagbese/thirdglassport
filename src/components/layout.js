/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes, { number } from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FiArrowUpRight } from "react-icons/fi"
import gsap from "gsap"
import { useState } from "react"
import memoji from "../images/mem.png"
import Draggable from "gsap/Draggable"
import gif from "../images/gif.gif"
import ScrollContainer from 'react-indiana-drag-scroll'

//import { TimelineMax } from "gsap/gsap-core"

//page components
import About from "./About"
// import Hero from "./Hero"
import Projects from "./Projects"
// import Contact from "./Contact"
// import Header from "./header"
import Toggle from "./Toggle"
import "./layout.css"

const Layout = ({ children }) => {
  const [active, setActive] = useState("aboutCard")

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="wrapper text">
      <div className="cardlayer">
        <div className="top">
          <p className="standin">Eyes</p>
          <div className="alertwrapper">
              <Toggle  onClick={() => {
                popup()
                console.log("pop")
              }}/>
              <div className="alert blur">
              <img src={gif} alt="we don't do that here" className="gif"/>
              </div>
          </div>
        </div>
        <div className="cardwrapper ">
          <div className="aurora">
            <div className="ball " id="ball1">l</div>
          </div>
          <div className="aurora">
            <div className="ball " id="ball2"></div>
          </div>
          <div className="card visible"></div>
        </div>
      </div>

      {/* content */}

      <div className="contentlayer">
        <div className="content">
          {/* setup react router */}
          {active === "aboutCard" && <About />}
          {active === "projectsCard" && <Projects />}
        </div>

        {/* nav */}
        <div className="nav">
          <span
            onClick={() => {    
              setActive("aboutCard")
              
              setTimeout(() => {
                aboutSelect()
                changeColor(" #0000ff","#6b0080")
                // scrolllayer.style.overflow = "scroll";
              }, 0.10);
              
              
            }}
            className="navspan"
          >
            <h1 className="text navitem">About </h1>
            <FiArrowUpRight className="arrow" />
          </span>

          <span
            onClick={() => {
              setActive("projectsCard")
              
              setTimeout(() => {
                //shift()
                
                projectSelect()
                changeColor(" #11d9ff","#3322ff")
                // scrolllayer.style.overflow = "scroll";
              }, 0.010);
            }}
            className="navspan"
          >
            <h1 className="text navitem">Projects </h1>
            <FiArrowUpRight className="arrow" />
          </span>
          <span
            onClick={() => {
              aboutSelect()
            }}
            className="navspan"
          >
            <h1 className="text navitem">Contact </h1>
            <FiArrowUpRight className="arrow" />
          </span>
        </div>
      </div>
    </div>
  )
}

//movement


function changeColor(color1,color2) {
  var ball1 = document.getElementById("ball1");
  var ball2 = document.getElementById("ball2");
  var colorIntensity = "75";  

  ball1.style.background = "linear-gradient(to left, " + color1+ colorIntensity +","+color2 + colorIntensity +")";
  ball2.style.background = "linear-gradient(to left, " + color1+ colorIntensity +","+color2 + colorIntensity +")";

  console.log("color changed")
}

function moveBall1() {
  var tl = gsap.timeline({ repeat: -1 })
  tl.to("#ball1", 3, { x: 170, yoyo: true, repeat: 1 })
  tl.to("#ball1", 3, { y: -170, yoyo: true, repeat: 1 })
}
function moveBall2() {
  var tl = gsap.timeline({ repeat: -1 })
  tl.to("#ball2", 3, { y: 200, yoyo: true, repeat: 1 })
  tl.to("#ball1", 3, { x: -150, yoyo: true, repeat: 1 })
}

var ballIsMoving;

function popup() {
  document.querySelector(".alert").style.display = "block";
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 2500);
}

//about timelines

var tl1 = gsap.timeline()
var tl2 = gsap.timeline()
var tl3 = gsap.timeline()
var tl4 = gsap.timeline()
var tl5 = gsap.timeline()
var tl6 = gsap.timeline()
var tl7 = gsap.timeline()
var tl8 = gsap.timeline()
var tl9 = gsap.timeline()
var tl10 = gsap.timeline()
var tl11 = gsap.timeline()
var tl12 = gsap.timeline()
var tl13 = gsap.timeline()
var tl14 = gsap.timeline()


//project timelines

var tl15 = gsap.timeline();
var tl16 = gsap.timeline();


function firstMoveBalls() {
  setTimeout(() => {
    moveBall1()
    moveBall2()
    tl5.to(".ball", { opacity: 1 })
    moveBalls();
  }, 3000)
  ballIsMoving = "true";
}
function moveBalls() {
    moveBall1()
    moveBall2()
    tl5.to(".ball", { opacity: 1 })
    ballIsMoving = "true";
}


function darken() {
  tl14.to(".card",{opacity: 0})
}


function aboutSelect() {
  if (window.innerWidth >= 720) {
    //disapearing colors tween
    tl5.to(".ball", { opacity: 0, duration: 0.1})


    tl1.fromTo(
      ".cardwrapper",
      { opacity: 0.3, y: "100%" },
      { opacity: 1, duration: 1, y: "0%" }
    )
    tl2.fromTo(
      ".links",
      { opacity: 0.3, x: "-100%" },
      { opacity: 1, duration: 2, ease: "power2", x: "0%" }
    )
    tl3.fromTo(
      ".subcard3",
      { opacity: 0.3, x: "-100%" },
      { opacity: 1, duration: 2, ease: "power2", x: "0%" }
    )
    tl6.fromTo(".visible", { opacity: 0.3 }, { opacity: 1 })
    tl7.fromTo(".subcard3", { opacity: 0.3 }, { opacity: 1 })
    tl9.fromTo(
      ".biotext",
      { opacity: 0.3, y: "-100%" },
      { opacity: 1, duration: 2, ease: "power2", y: "0%" }
    )
    tl10.fromTo(
      ".firstskills",
      { opacity: 0.3, y: "100%" },
      { opacity: 1, duration: 2, ease: "power2", y: "0%" }
    )
    tl11.fromTo(
      ".secondskills",
      { opacity: 0.3, x: "100%" },
      { opacity: 1, duration: 2, ease: "power2", x: "0%" }
    )
    tl12.fromTo(
      ".bio",
      { opacity: 0.3, x: "100%" },
      { opacity: 1, duration: 2, ease: "power2", x: "0%" }
    )
    tl13.fromTo(".bigtext", { opacity: 0 }, { opacity: 1, duration: 2 })

    firstMoveBalls();
    
      
  }
  //mobile device tweens
  else{
    //disapearing colors tween
    tl5.to(".ball", { opacity: 0, duration: 0.1})

    tl1.fromTo(
      ".cardwrapper",
      { opacity: 0.3, y: "100%" },
      { opacity: 1, duration: 1, y: "0%" }
    )
    tl2.fromTo(
      ".links",
      { opacity: 0.3, y: "100%" },
      { opacity: 1, duration: 2, ease: "power2", y: "0%" }
    )
    tl3.fromTo(
      ".subcard3",
      { opacity: 0.3, x: "-100%" },
      { opacity: 1, duration: 2, ease: "power2", x: "0%" }
    )
    //tl4.fromTo(".line", {opacity: 0.3, y: "-100%  ",},{opacity: 1, duration: 2.75,ease:"power2", y: "0%"});
    tl6.fromTo(".visible", { opacity: 0.3 }, { opacity: 1 })
    tl7.fromTo(".subcard3", { opacity: 0.3 }, { opacity: 1 })
    //tl8.fromTo(".line", {opacity: 0.3}, {opacity: 1})
    tl9.fromTo(
      ".biotext",
      { opacity: 0.3, y: "-100%" },
      { opacity: 1, duration: 2, ease: "power2", y: "0%" }
    )
    tl10.fromTo(
      ".firstskills",
      { opacity: 0.3, y: "100%" },
      { opacity: 1, duration: 2, ease: "power2", y: "0%" }
    )
    tl11.fromTo(
      ".secondskills",
      { opacity: 0.3, x: "100%" },
      { opacity: 1, duration: 2, ease: "power2", x: "0%" }
    )
    tl12.fromTo(
      ".bio",
      { opacity: 0.3, x: "-100%" },
      { opacity: 1, duration: 2, ease: "power2", x: "0%" }
    )
    tl13.fromTo(".bigtext", { opacity: 0 }, { opacity: 1, duration: 2 })

    firstMoveBalls()
  }
}

function projectSelect(){
  if (window.innerWidth >= 720) {
    //disapearing colors tween
    tl5.to(".ball", { opacity: 0, duration: 0.1})
    tl1.fromTo(
      ".cardwrapper",
      { opacity: 0.3, y: "100%" },
      { opacity: 1, duration: 1, y: "0%" }
    )

    tl6.fromTo(".visible", { opacity: 0.3 }, { opacity: 1 })
    

    tl15.fromTo(
      ".projectcontent",
      { opacity: 0.3, x: "100%" },
      { opacity: 1, duration: 1, x: "0%" }
    )

    tl15.fromTo(
      ".projectside",
      { opacity: 0.3, x: "-100%" },
      { opacity: 1, duration: 2, x: "0%" }
    )
    tl15.fromTo(".bigtext", { opacity: 0 }, { opacity: 1, duration: 3 })
    firstMoveBalls()

  }else{
    //disapearing colors tween
    tl5.to(".ball", { opacity: 0, duration: 0.1})
    tl1.fromTo(
      ".cardwrapper",
      { opacity: 0.3, y: "100%" },
      { opacity: 1, duration: 1, y: "0%" }
    )

    tl6.fromTo(".visible", { opacity: 0 }, { opacity: 1 })
    //tl6.fromTo(".bigtext", { opacity: 0 }, { opacity: 1, duration: 2 })
    tl15.fromTo(
      ".projectcontent",
      { opacity: 0.3, x: "100%" },
      { opacity: 1, duration: 1, x: "0%" }
    )

    tl15.fromTo(
      ".projectside",
      { opacity: 0.3, y: "-100%" },
      { opacity: 1, duration: 1.5, y: "0%" }
    )
    tl15.fromTo(".bigtext", { opacity: 0 }, { opacity: 1, duration: 3 })
    firstMoveBalls()
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
