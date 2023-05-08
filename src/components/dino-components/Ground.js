import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"

const SPEED = 0.05
let groundElems = document.querySelectorAll("[data-ground]")

export function setUpGround(elem){
    setCustomProperty(elem[0], "--left", 0)
    setCustomProperty(elem[1], "--left", 300)
    console.log("ge: "+elem[0]);
}

export function updateGround(elem, delta, speedScale){
    elem.forEach(ground => {
        incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1)

        if (getCustomProperty(ground, "--left") <= -300){
            incrementCustomProperty(ground, "--left", 600)
        }
    })
}