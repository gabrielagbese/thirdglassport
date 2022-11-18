import * as React from "react"
import gsap from "gsap"
import memoji from "../images/mem.png"
import "./layout.css"



const Toggle = ({fn}) => {

    return(
        <div className="wrapper2 text">
            {/* <span>🌒</span> */}
            <label class="switch">
                <input type="checkbox"></input>
                <span class="slider round"></span>
            </label>
            {/* <span>☀️</span> */}
        </div>
    )
}

export default Toggle;