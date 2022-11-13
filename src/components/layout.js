/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes, { number } from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap"
import memoji from "../images/mem.png"
//import { TimelineMax } from "gsap/gsap-core"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  const [active, setActive]  = useState("heroCard")

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
          <div className="line"></div>
          <p className="standin">Dark</p>
        </div>
        <div className="cardwrapper visible">
          <div className="aurora">
            <div className="ball ball1">l</div>
          </div>
          <div className="aurora">
            <div className="ball ball2"></div>
          </div>
          <div className="card visible"></div>
        </div>
      </div>

{/* content */}

      <div className="contentlayer">
        <div className="content">
        {/* content of about section */}
          <div className="about section abouttext">
            <div className="side">
              <div className="header"><p className="bigtext">About</p></div>
              <div className="linksbio">
                <div className="links midtext"><img src={memoji} alt="BigCo Inc. logo" className="memoji"/></div>
                <div className="biotext blur smalltext">biotext</div>
              </div>
              <div className="firstskills blur smalltext">java, and co</div>
            </div>
            <div className="bio blur"></div>
            <div className="secondskills blur smalltext"> second skills</div>
          </div>
        </div>



{/* nav */}
        <div className="nav">

          <span onClick={() => {cardSelect()}} className="navspan">
            <h1 className="text navitem">About </h1>
            <FiArrowUpRight className="arrow"/>
          </span>

          <span onClick={() => {cardSelect()}} className="navspan">
            <h1 className="text navitem">Projects </h1>
            <FiArrowUpRight className="arrow"/>
          </span>

          <span onClick={() => {cardSelect()}} className="navspan">
            <h1 className="text navitem">Contact </h1>
            <FiArrowUpRight className="arrow"/>
          </span>
        </div>
      </div>
    </div>
  )
}

//movement

function moveBall1() {
    var tl = gsap.timeline({repeat:-1});
    tl.to(".ball1", 3, {x:170, yoyo:true, repeat:1});  
    tl.to(".ball1", 3, {y:-170, yoyo:true, repeat:1});  
}
function moveBall2() {
  var tl = gsap.timeline({repeat:-1});
  tl.to(".ball2", 3, {y:200, yoyo:true, repeat:1});
  tl.to(".ball1", 3, {x:-150, yoyo:true, repeat:1});  
}
 function moveBalls() {

  var tl5 = gsap.timeline();

  setTimeout(() => {
    moveBall1();
    moveBall2();
    tl5.to(".ball", {opacity: 1})
  }, 2400);
 }



//cards
var tl1 =  gsap.timeline();
var tl2 =  gsap.timeline();
var tl3 =  gsap.timeline();
var tl4 =  gsap.timeline();
var tl6 =  gsap.timeline();
var tl7 =  gsap.timeline();
var tl8 =  gsap.timeline();
var tl9 =  gsap.timeline(); 
var tl10 =  gsap.timeline();
var tl11 =  gsap.timeline();
var tl12 =  gsap.timeline();
var tl13 =  gsap.timeline();

function cardSelect() {
  tl1.fromTo(".cardwrapper", {opacity: 0.3, y: "100%",}, {opacity: 1, duration: 1, y: "0%"});
  tl2.fromTo(".links", {opacity: 0.3, y: "100%",}, {opacity: 1, duration: 2, ease: "power2", y: "0%"});
  tl3.fromTo(".subcard3", {opacity: 0.3, x: "-100%",}, {opacity: 1, duration: 2, ease: "power2", x: "0%"});
  //tl4.fromTo(".line", {opacity: 0.3, y: "-100%  ",},{opacity: 1, duration: 2.75,ease:"power2", y: "0%"});
  tl6.fromTo(".visible", {opacity: 0.3}, {opacity: 1});
  tl7.fromTo(".subcard3", {opacity: 0.3}, {opacity: 1});
  //tl8.fromTo(".line", {opacity: 0.3}, {opacity: 1})
  tl9.fromTo(".biotext", {opacity: 0.3, y: "-100%",}, {opacity: 1, duration: 2, ease: "power2", y: "0%"});
  tl10.fromTo(".firstskills", {opacity: 0.3, y: "100%",}, {opacity: 1, duration: 2, ease: "power2", y: "0%"});
  tl11.fromTo(".secondskills", {opacity: 0.3, x: "100%",}, {opacity: 1, duration: 2, ease: "power2", x: "0%"});
  tl12.fromTo(".bio", {opacity: 0.3, x: "-100%",}, {opacity: 1, duration: 2, ease: "power2", x: "0%"});
  tl13.fromTo(".bigtext", {opacity: 0}, {opacity: 1, duration: 2})

  moveBalls();

}




Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
