/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useEffect } from "react"
import PropTypes, { func, number } from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FiArrowUpRight } from "react-icons/fi"
import gsap from "gsap"
import { useState } from "react"
import memoji from "../images/mem.png"
import Draggable from "gsap/Draggable"
import gif from "../images/gif.gif"
import {AiOutlineClose} from "react-icons/ai"
import ScrollContainer from "react-indiana-drag-scroll"
import { inject } from '@vercel/analytics';
import About from "./About"
import Hero from "./Hero"
import Projects from "./Projects"
import Contact from "./Contact"
import Toggle from "./Toggle"
import "./layout.css"
inject();

//import { TimelineMax } from "gsap/gsap-core"

//page components


const Layout = ({ children }) => {
  const [active, setActive] = useState("heroCard")

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  useEffect(() => {
    var pupils = document.getElementsByClassName("pupil")
    var pupilsArray = Array.from(pupils)

    console.log("arr", pupilsArray)

    var input = {
      mouseX: {
        start: 0,
        end: window.innerWidth,
        current: 0,
      },
      mouseY: {
        start: 0,
        end: window.innerHeight,
        current: 0,
      },
    }

    input.mouseX.range = input.mouseX.end - input.mouseX.start
    input.mouseY.range = input.mouseY.end - input.mouseY.start

    var output = {
      x: {
        start: -7.5,
        end: 31.5,
        current: 0,
      },
      y: {
        start: 10,
        end: 22,
        current: 0,
      },
    }

    output.x.range = output.x.end - output.x.start
    output.y.range = output.y.end - output.y.start

    var handleMouseMove = function (event) {
      input.mouseX.current = event.clientX
      input.mouseX.fraction =
        (input.mouseX.current - input.mouseX.start) / input.mouseX.range

      input.mouseY.current = event.clientY
      input.mouseY.fraction =
        (input.mouseY.current - input.mouseY.start) / input.mouseY.range

      output.x.current = output.x.start + input.mouseX.fraction * output.x.range
      output.y.current = output.y.start + input.mouseY.fraction * output.y.range

      pupilsArray.forEach(function (pupil, k) {
        pupil.style.transform =
          "translate(" + output.x.current + "px, " + output.y.current + "px)"
      })
    }

    var handleResize = function () {
      input.mouseX.end = window.innerWidth - 200
      input.mouseX.range = input.mouseX.end - input.mouseX.start
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    console.log("eye ran")
  })
  //moveEye();

  return (
    <div className="wrapper text">
      <div className="cardlayer">
        <div id="anchor" className="top">
          <div className="eyewrapper" onClick={() => {
              darken()
              setActive("heroCard")
			  var tl19 = gsap.timeline()
			  tl19.to(".eyewrapper", { opacity: 0 })
            //   var contentlight = document.getElementsByClassName("content")[0]
            //   contentlight.style.opacity = 1
            //   setTimeout(() => {
            //     aboutSelect()
            //     changeColor(" #0000ff", "#6b0080", "#0000ff")
            //   }, 0.1)
            }}>
            <div className="eye eye1">
              <div className="pupil"></div>
            </div>
            <div className="eye eye2">
              <div className="pupil"></div>
            </div>
			<div className="x">
				<AiOutlineClose/>
			</div>
          </div>
          
        </div>
        <div className="cardwrapper ">
			<div className="aurora">
				<div className="ball " id="ball1"></div>
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
		  {active === "heroCard" && <Hero />}
          {active === "aboutCard" && <About />}
          {active === "projectsCard" && <Projects />}
          {active === "contactCard" && <Contact />}
        </div>

        {/* nav */}
        <div className="nav">
          <span
            onClick={() => {
              darken()
              setActive("aboutCard")
              var contentlight = document.getElementsByClassName("content")[0]
              contentlight.style.opacity = 1
              setTimeout(() => {
                aboutSelect()
                changeColor(" #0000ff", "#6b0080", "#0000ff")
              }, 0.1)
            }}
            className="navspan"
          >
            <h1 className="text navitem">About </h1>
            <FiArrowUpRight className="arrow" />
          </span>

          <span
            onClick={() => {
              darken()
              setActive("projectsCard")
              var contentlight = document.getElementsByClassName("content")[0]
              contentlight.style.opacity = 1
              setTimeout(() => {
                projectSelect()
                changeColor("#3322ff", "#11d9ff", "#3322ff")
              }, 0.1)
            }}
            className="navspan"
          >
            <h1 className="text navitem">Projects</h1>
            <FiArrowUpRight className="arrow" />
          </span>
          <span
            onClick={() => {
              darken()
              setActive("contactCard")
              var contentlight = document.getElementsByClassName("content")[0]
              contentlight.style.opacity = 1
              setTimeout(() => {
                contactSelect()
                changeColor("#11d9ff", "#3322ff", "#dc0080")
              }, 0.1)
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

//eyeball

//movement
function changeColor(color1, color2, color3) {
  var ball1 = document.getElementById("ball1")
  var ball2 = document.getElementById("ball2")
  var colorIntensity = "b2"

  ball1.style.background =
    "linear-gradient(to left, " +
    color1 +
    colorIntensity +
    "," +
    color2 +
    colorIntensity +
    "," +
    color3 +
    colorIntensity +
    ")"
  ball2.style.background =
    "linear-gradient(to left, " +
    color1 +
    colorIntensity +
    "," +
    color2 +
    colorIntensity +
    "," +
    color3 +
    colorIntensity +
    ")"

  console.log("color changed")
}

function moveBall1() {
  // var tl = gsap.timeline({ repeat: -1 })
  // tl.to("#ball1", 3, { x: 170, yoyo: true, repeat: 1 })
  // tl.to("#ball1", 3, { y: -170, yoyo: true, repeat: 1 })
}
function moveBall2() {
  // var tl = gsap.timeline({ repeat: -1 })
  // tl.to("#ball2", 3, { y: 200, yoyo: true, repeat: 1 })
  // tl.to("#ball1", 3, { x: -150, yoyo: true, repeat: 1 })
}

var ballIsMoving

function popup() {
  document.querySelector(".alert").style.display = "block"
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none"
  }, 2500)
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

var tl15 = gsap.timeline()
var tl16 = gsap.timeline()
var tl17 = gsap.timeline()

function firstMoveBalls() {
  setTimeout(() => {
    moveBall1()
    moveBall2()
    tl5.to(".ball", { opacity: 1 })
    moveBalls()
  }, 3000)
  ballIsMoving = "true"
}
function moveBalls() {
  moveBall1()
  moveBall2()
  tl5.to(".ball", { opacity: 1 })
  ballIsMoving = "true"
}

function darken() {
  var cardlight = document.getElementsByClassName("cardwrapper")[0]

  console.log(cardlight.style.opacity, "opacity")
  cardlight.style.opacity = 0
}

function aboutSelect() {
  darken()
  if (window.innerWidth >= 720) {
    //disapearing colors tween
    tl5.to(".ball", { opacity: 0, duration: 0.1 })

    // tl17.fromTo(".x",
    //   {opacity: 0.3, x:"100%"},
    //   {opacity: 1, duration: 1.5, x: "0%",duration:2,}
    // )
    tl1.fromTo(
      ".cardwrapper",
      { opacity: 0.3, y: "100%" },
      { opacity: 1, duration: 1.5, y: "0%" }
    )
    tl1.to(".eyewrapper", { opacity: 0.8 })
    tl2.fromTo(
      ".links",
      { opacity: 0.3, x: "-100%" },
      { opacity: 1, duration: 2.5, ease: "power2", x: "0%" }
    )
    tl3.fromTo(
      ".subcard3",
      { opacity: 0.3, x: "-100%" },
      { opacity: 1, duration: 1.5, ease: "power2", x: "0%" }
    )
    tl6.fromTo(".visible", { opacity: 0.3 }, { opacity: 1 })
    tl7.fromTo(".subcard3", { opacity: 0.3 }, { opacity: 1 })
    tl9.fromTo(
      ".biotext",
      { opacity: 0, y: "100%" },
      { opacity: 1, duration: 2.5, ease: "power2", y: "0%" }
    )
    tl10.fromTo(
      ".firstskills",
      { opacity: 0.3, y: "100%" },
      { opacity: 1, duration: 2.5, ease: "power2", y: "0%" }
    )
    // tl11.fromTo(
    //   ".swaptab",
    //   { opacity: 0.3, x: "100%" },
    //   { opacity: 1, duration: 1.5, ease: "power2", x: "0%" }
    // )
    tl12.fromTo(
      ".bio",
      { opacity: 0.3, x: "100%" },
      { opacity: 1, duration: 1.5, ease: "power2", x: "0%" }
    )
    tl13.fromTo(".bigtext", { opacity: 0 }, { opacity: 1, duration: 1.5 })
    tl1.fromTo(".classname", { opacity: 0 }, { opacity: 1 })
    firstMoveBalls()
  }
  //mobile device tweens
  else {
    //disapearing colors tween
    tl5.to(".ball", { opacity: 0, duration: 0.1 })

    tl1.fromTo(
      ".cardwrapper",
      { opacity: 0.3, y: "100%" },
      { opacity: 1, duration: 1.5, y: "0%" }
    )
	tl1.to(".eyewrapper", { opacity: 0.8 })
    tl2.fromTo(
      ".links",
      { opacity: 0.3, y: "100%" },
      { opacity: 1, duration: 2.5, ease: "power2", y: "0%" }
    )
    tl3.fromTo(
      ".subcard3",
      { opacity: 0.3, x: "-100%" },
      { opacity: 1, duration: 2, ease: "power2", x: "0%" }
    )
    //tl4.fromTo(".line", {opacity: 0.3, y: "-100%  ",},{opacity: 1, duration: 1.5.75,ease:"power2", y: "0%"});
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
      ".swaptab",
      { opacity: 0.3, x: "100%" },
      { opacity: 1, duration: 2, ease: "power2", x: "0%" }
    )
    tl12.fromTo(
      ".bio",
      { opacity: 0.3, x: "-100%" },
      { opacity: 1, duration: 1.5, ease: "power2", x: "0%" }
    )
    tl13.fromTo(".bigtext", { opacity: 0 }, { opacity: 1, duration: 1.5 })
    setTimeout(() => {
      tl1.fromTo(".classname", { opacity: 0 }, { opacity: 1, duration: 2 })
    }, 3000)

    firstMoveBalls()
  }
}

function projectSelect() {
  darken()
  if (window.innerWidth >= 720) {
    //disapearing colors tween
    tl5.to(".ball", { opacity: 0, duration: 0.1 })
    tl1.fromTo(
      ".cardwrapper",
      { opacity: 0.3, y: "100%" },
      { opacity: 1, duration: 1.5, y: "0%" }
    )
    tl1.to(".eyewrapper", { opacity: 0.8 })

    tl6.fromTo(".visible", { opacity: 0.3 }, { opacity: 1 })

    tl15.fromTo(
      ".projectcontent",
      { opacity: 0.3, x: "100%" },
      { opacity: 1, duration: 1.5, x: "0%" }
    )

    tl15.fromTo(
      ".projectside",
      { opacity: 0, x: "-75%" },
      { opacity: 1, duration: 1.5, x: "0%" }
    )
    tl15.fromTo(".bigtext", { opacity: 0 }, { opacity: 1, duration: 2 })
    firstMoveBalls()
    setTimeout(() => {
      tl1.fromTo(".classname", { opacity: 0 }, { opacity: 1, duration: 2 })
    }, 3000)
  } else {
    //disapearing colors tween
    tl5.to(".ball", { opacity: 0, duration: 0.1 })
    tl1.fromTo(
      ".cardwrapper",
      { opacity: 0.3, y: "100%" },
      { opacity: 1, duration: 1.5, y: "0%" }
    )

	tl15.to(".eyewrapper", { opacity: 0.8 })

    tl6.fromTo(".visible", { opacity: 0 }, { opacity: 1 })
    //tl6.fromTo(".bigtext", { opacity: 0 }, { opacity: 1, duration: 1.5 })
    tl1.fromTo(
      ".projectcontent",
      { opacity: 0.3, x: "100%" },
      { opacity: 1, duration: 1.5, x: "0%" }
    )

    tl15.fromTo(".projectside", { opacity: 0 }, { opacity: 1, duration: 1.5 })
    tl15.fromTo(".bigtext", { opacity: 0 }, { opacity: 1, duration: 2 })
    setTimeout(() => {
      tl1.fromTo(".classname", { opacity: 0 }, { opacity: 1, duration: 2 })
    }, 3000)
    firstMoveBalls()
  }
}

function contactSelect() {
  darken()
  if (window.innerWidth >= 720) {
    tl5.to(".ball", { opacity: 0, duration: 0.1 })
    tl1.fromTo(
      ".cardwrapper",
      { opacity: 1, y: "100%" },
      { opacity: 1, duration: 1.5, y: "0%" }
    )
    tl1.to(".eyewrapper", { opacity: 0.8 })
    tl1.fromTo(".contactside", { opacity: 0 }, { opacity: 1, })
    tl7.fromTo(
      ".contactcontent",
      { opacity: 0, y: "100%" },
      { opacity: 1, duration: 1.25, y: "0%" ,delay: 1.5}
    )
    tl1.fromTo(".sociallinks", { opacity: 0 }, { opacity: 1, duration: 1.5 })

    tl6.fromTo(".visible", { opacity: 0.3 }, { opacity: 1 })
    firstMoveBalls()
  } else {
    tl5.to(".ball", { opacity: 0, duration: 0.1 })
    tl1.fromTo(
      ".cardwrapper",
      { opacity: 0.3, y: "100%" },
      { opacity: 1, duration: 1.5, y: "0%" }
    )

	tl1.to(".eyewrapper", { opacity: 0.8 })
    tl1.fromTo(".contactside", { opacity: 0 }, { opacity: 1, duration: 0.5 })
    tl1.fromTo(
      ".contactcontent",
      { opacity: 0, y: "100%" },
      { opacity: 1, duration: 1, y: "0%" }
    )
    tl1.fromTo(".sociallinks", { opacity: 0 }, { opacity: 1, duration: 1.5 })

    tl6.fromTo(".visible", { opacity: 0.3 }, { opacity: 1 })
    firstMoveBalls()
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
