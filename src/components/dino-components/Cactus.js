import cactusImg from "../../images/cactus.png";
import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty";

const SPEED = 0.05
const CACTUS_INTERVAL_MIN = 800
const CACTUS_INTERVAL_MAX = 2000


let nextCactusTime
export function setUpCactus(elem){
    document.querySelectorAll("[data-cactus]").forEach(cactus =>{
        cactus.remove()
    })
    nextCactusTime = CACTUS_INTERVAL_MIN
}

export function updateCactus(worldElem, delta, speedScale){

    document.querySelectorAll("[data-cactus]").forEach(cactus => {
        incrementCustomProperty(cactus, "--left", delta * speedScale * SPEED * -1)
        if (getCustomProperty(cactus, "--left") <= -100) {
            cactus.remove()
        }
    })
    
    if(nextCactusTime <= 0){
        createCactus(worldElem)
        nextCactusTime = randomNumberBetween(CACTUS_INTERVAL_MIN,CACTUS_INTERVAL_MAX)/speedScale
    }
    nextCactusTime -= delta

}

export function getCactusRects(){
    return [...document.querySelectorAll("[data-cactus]")].map(cactus => {
        return cactus.getBoundingClientRect()
    })
}

function createCactus(worldElem){
    const cactus = document.createElement("img")
    cactus.dataset.cactus = true
    cactus.src = require('../../images/cactus.png').default
    cactus.classList.add("cactus")
    setCustomProperty(cactus, "--left", 100)
    worldElem.append(cactus)
}

function randomNumberBetween(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

