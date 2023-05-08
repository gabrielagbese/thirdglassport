import React from 'react'
import ground from "../images/ground.png";
import dinoStationary from "../images/dino-stationary.png";
import { useEffect } from 'react';
import { useState } from 'react';
import { setUpGround, updateGround} from './dino-components/Ground'
import { setUpDino, updateDino, getDinoRects, setDinoLose} from './dino-components/Dino'
import { setUpCactus, updateCactus, getCactusRects} from './dino-components/Cactus'

export default function Dino() {

    const [realScore, setRealScore] = useState(0)
    const [avoidExtraCall, setAvoidExtraCall] = useState(false);
    function testF(){
        alert("clicked")
    }
   
    setTimeout(() => {

        const keyDownHandler = event => {
            console.log('User pressed: ', event.key);
      
            if (event.key === 'x') {
              event.preventDefault();
      
              // 👇️ your logic here
              handleStart();
            }
          };

        const worldElem = document.querySelector('[data-world]')
        const dinoElem = document.querySelector('[data-dino]')
        const groundElems = document.querySelectorAll("[data-ground]")
        const startScreenElem = document.querySelector("[data-start-screen]")
        const WORLD_WIDTH = 100;
        const SPEED_SCALE_INCREASE = 0.00001;

        let lastTime;
        let speedScale;
        let score
        

        //setAvoidExtraCall(false);
        
        setPixelsToWorldScale()
        window.addEventListener("resize",setPixelsToWorldScale())
        //document.addEventListener("keydown", handleStart, {once: true})
        document.addEventListener('keydown', keyDownHandler);
        

        
    
        function setPixelsToWorldScale() {
            let worldToPixelScale;
            let WORLD_HEIGHT;

            if(window.innerWidth / window.innerHeight > 1)
            {
                worldToPixelScale = (window.innerWidth / WORLD_WIDTH)*0.55;
                WORLD_HEIGHT = 25;
            }else
            {
                worldToPixelScale = (window.innerWidth / WORLD_WIDTH)*0.95;
                WORLD_HEIGHT = 50;
            }
    
            worldElem.style.width = WORLD_WIDTH * worldToPixelScale + "px";
            worldElem.style.height = WORLD_HEIGHT * worldToPixelScale + "px";
        }

        function checkLose(dinoElem){
            let dinoRect = getDinoRects(dinoElem)
            return getCactusRects().some(rect => isCollision(rect, dinoRect))
        }

        function isCollision(rect1, rect2){
            return (
                rect1.left < rect2.right &&
                rect1.top < rect2.bottom &&
                rect1.right > rect2.left &&
                rect1.bottom > rect2.top
              )
                    
        }

        function updateSpeedScale(delta){
            speedScale += delta * SPEED_SCALE_INCREASE
        }

        function updateScore(delta){
            score += delta * 0.01
            setRealScore(Math.floor(score))
        }

        
        function update(time){
            if (lastTime == null){
                lastTime = time;
                requestAnimationFrame(update);
                return
            }
            const delta = time - lastTime
            updateGround(groundElems, delta, speedScale);
            updateDino(dinoElem, delta, speedScale)
            updateCactus(worldElem, delta, speedScale)
            updateSpeedScale(delta)
            updateScore(delta)
            //console.log("cl:"+checkLose(dinoElem))
            if (checkLose(dinoElem)){
                return handleLose()
            }

            lastTime = time;
            requestAnimationFrame(update)
        }

        function handleStart(){
                lastTime = null
                speedScale = 1
                score = 0
                startScreenElem.style.opacity = 0
                setUpGround(groundElems)
                setUpDino(dinoElem)
                setUpCactus(dinoElem)
                requestAnimationFrame(update)
                //This if statement will only be executed once
              
        }

        function handleLose(dinoElem){
            const dE = document.querySelector('[data-dino]')
            setDinoLose(dE)
            setTimeout(() => {
                document.addEventListener("keydown", handleStart, {once: true})
                startScreenElem.classList.remove("hide")
            }, 100);
        }


    
    }, 100);
        

    
  return (
    <div className='dino-wrapper'>
        <div className='above-nav'>
            <div className='world' id='world' data-world>
                <div className='score' data-score>{realScore}</div>
                <div className='start-screen' data-start-screen>click to start</div>
                <img className='ground' src={ground} data-ground></img>
                <img className='ground' src={ground} data-ground></img>
                <img className='dino' onClick={() => {testF()}} src={dinoStationary} data-dino></img>
            </div>
        </div>
        <div className='below-nav'></div>
    </div>
  )
}
