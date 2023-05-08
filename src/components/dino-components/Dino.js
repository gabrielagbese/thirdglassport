import dinoStationary from "../../images/dino-stationary.png";
import dinoRun0 from "../../images/dino-run-0.png";
import dinoRun1 from "../../images/dino-run-1.png"; 
import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty";
const JUMP_SPEED = 0.45;
const GRAVITY = 0.0015;
const DINO_FRAME_COUNT =  2
const FRAME_TIME = 100; 

let isJumping
let dinoFrame
let currentFrameTime
let yVelocity

export function setUpDino(elem){
    console.log("nums: "+isJumping+","+dinoFrame+","+currentFrameTime+","+yVelocity)
    isJumping = false
    dinoFrame = 0
    currentFrameTime = 0
    yVelocity = 0
    setCustomProperty(elem, "--bottom",0)
    document.removeEventListener("keydown", onJump)
    document.addEventListener("keydown", onJump)
    console.log("nums: "+isJumping+","+dinoFrame+","+currentFrameTime+","+yVelocity)
}

export function updateDino(elem, delta, speedScale){
    handleRun(elem, delta, speedScale)
    handleJump(elem, delta)
}

export function getDinoRects(dinoElem){
    //console.log(dinoElem.getBoundingClientRect().top)
    return dinoElem.getBoundingClientRect()
}

export function setDinoLose(elem){
    elem.src = require('../../images/dino-lose.png').default
    return
}

function handleRun(elem, delta, speedScale){
    if(isJumping){
        elem.src = require('../../images/dino-stationary.png').default
        return
    }

    if(currentFrameTime >= FRAME_TIME){
        dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT
        elem.src = require('../../images/dino-run-'+ dinoFrame +'.png').default
        currentFrameTime -= FRAME_TIME
    }

    currentFrameTime += delta * speedScale
}

function handleJump(elem, delta, speedScale){
    if(! isJumping) return

    incrementCustomProperty(elem, "--bottom", yVelocity * delta)
    if(getCustomProperty(elem, "--bottom") <= 0){
        setCustomProperty(elem, "--bottom", 0)
        isJumping = false
    }

    yVelocity -= GRAVITY * delta
}

function onJump(e){
    if(e.code !== "Space" || isJumping) return

    yVelocity = JUMP_SPEED
    isJumping = true
}